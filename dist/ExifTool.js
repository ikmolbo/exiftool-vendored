"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bc = require("batch-cluster");
var _child_process = require("child_process");
var _fs = require("fs");
var _os = require("os");
var _path = require("path");
var _process = require("process");
var BinaryExtractionTask_1 = require("./BinaryExtractionTask");
var ReadTask_1 = require("./ReadTask");
var VersionTask_1 = require("./VersionTask");
var WriteTask_1 = require("./WriteTask");
var DateTime_1 = require("./DateTime");
exports.ExifDate = DateTime_1.ExifDate;
exports.ExifTime = DateTime_1.ExifTime;
exports.ExifDateTime = DateTime_1.ExifDateTime;
exports.ExifTimeZoneOffset = DateTime_1.ExifTimeZoneOffset;
function findExiftool() {
    var path = require("exiftool-vendored-libs");
    // This s/app.asar/app.asar.unpacked/ path switch adds support for Electron
    // apps that are ASAR-packed.
    // Note that we can't check for electron because child processes that are
    // spawned by the main process will most likely need the ELECTRON_RUN_AS_NODE
    // environment variable set, which will unset the process.versions.electron
    // field.
    var fixedPath = path
        .split(_path.sep)
        .map(function (ea) { return (ea === "app.asar" ? "app.asar.unpacked" : ea); })
        .join(_path.sep);
    // Note also, that we must check for the fixedPath first, because Electron's
    // ASAR shenanigans will make existsSync return true even for asar-packed
    // resources.
    if (_fs.existsSync(fixedPath)) {
        return fixedPath;
    }
    if (_fs.existsSync(path)) {
        return path;
    }
    throw new Error("Vendored ExifTool does not exist at " + path);
}
exports.DefaultExifToolPath = findExiftool();
var exiftoolArgs = ["-stay_open", "True", "-@", "-"];
exports.DefaultMaxProcs = Math.max(1, Math.floor(_os.cpus().length / 4));
/**
 * Manages delegating calls to a vendored running instance of ExifTool.
 *
 * Instances should be shared: consider using the exported singleton
 * instance of this class, `exiftool`.
 */
var ExifTool = /** @class */ (function () {
    /**
     * @param maxProcs The maximum number of ExifTool child processes to spawn
     * when load merits. Defaults to 1.
     * @param maxTasksPerProcess The maximum number of requests a given ExifTool
     * process will service before being retired. Defaults to 250, to balance
     * performance with memory usage.
     * @param spawnTimeoutMillis Spawning new ExifTool processes must not take
     * longer than `spawnTimeoutMillis` millis before it times out and a new
     * attempt is made. Be pessimistic here--windows can regularly take several
     * seconds to spin up a process, thanks to antivirus shenanigans. This can't
     * be set to a value less than 100ms. Defaults to 20 seconds, to accomodate
     * slow Windows machines.
     * @param taskTimeoutMillis If requests to ExifTool take longer than this,
     * presume the underlying process is dead and we should restart the task. This
     * can't be set to a value less than 10ms, and really should be set to at more
     * than a second unless `taskRetries` is sufficiently large or all writes will
     * be to a fast local disk. Defaults to 5 seconds.
     * @param onIdleIntervalMillis An interval timer is scheduled to do periodic
     * maintenance of underlying child processes with this periodicity. Defaults
     * to 2 seconds.
     * @param taskRetries The number of times a task can error or timeout and be
     * retried. Defaults to 2.
     * @param batchClusterOpts Allows for overriding any configuration used by the
     * underlying `batch-cluster` module.
     * @param exiftoolPath Allows for non-standard paths to ExifTool. Defaults to
     * the perl or windows binaries provided by `exiftool-vendored.pl` or
     * `exiftool-vendored.exe`.
     */
    function ExifTool(maxProcs, maxTasksPerProcess, spawnTimeoutMillis, taskTimeoutMillis, onIdleIntervalMillis, taskRetries, batchClusterOpts, exiftoolPath) {
        if (maxProcs === void 0) { maxProcs = exports.DefaultMaxProcs; }
        if (maxTasksPerProcess === void 0) { maxTasksPerProcess = 500; }
        if (spawnTimeoutMillis === void 0) { spawnTimeoutMillis = 20000; }
        if (taskTimeoutMillis === void 0) { taskTimeoutMillis = 5000; }
        if (onIdleIntervalMillis === void 0) { onIdleIntervalMillis = 2000; }
        if (taskRetries === void 0) { taskRetries = 2; }
        if (batchClusterOpts === void 0) { batchClusterOpts = {}; }
        if (exiftoolPath === void 0) { exiftoolPath = exports.DefaultExifToolPath; }
        this.maxProcs = maxProcs;
        this.maxTasksPerProcess = maxTasksPerProcess;
        this.spawnTimeoutMillis = spawnTimeoutMillis;
        this.taskTimeoutMillis = taskTimeoutMillis;
        this.onIdleIntervalMillis = onIdleIntervalMillis;
        this.taskRetries = taskRetries;
        this.batchClusterOpts = batchClusterOpts;
        this.exiftoolPath = exiftoolPath;
        var opts = __assign({ processFactory: function () {
                return _child_process.spawn(exiftoolPath, exiftoolArgs, {
                    stdio: "pipe",
                    shell: false,
                    detached: false,
                    env: { LANG: "C" }
                });
            }, maxProcs: maxProcs,
            onIdleIntervalMillis: onIdleIntervalMillis,
            spawnTimeoutMillis: spawnTimeoutMillis,
            taskTimeoutMillis: taskTimeoutMillis,
            maxTasksPerProcess: maxTasksPerProcess,
            taskRetries: taskRetries, retryTasksAfterTimeout: true, maxProcAgeMillis: 10 * 60 * 1000 }, batchClusterOpts, { pass: batchClusterOpts.pass || "{ready.*}", fail: batchClusterOpts.fail || "{ready.*}", exitCommand: "-stay_open\nFalse\n", versionCommand: batchClusterOpts.versionCommand || new VersionTask_1.VersionTask().command });
        this.batchCluster = new bc.BatchCluster(opts);
    }
    /**
     * @return a promise holding the version number of the vendored ExifTool
     */
    ExifTool.prototype.version = function () {
        return this.enqueueTask(new VersionTask_1.VersionTask());
    };
    /**
     * Read the tags in `file`.
     *
     * @param {string} file the file to extract metadata tags from
     * @param {string[]} [args] any additional ExifTool arguments, like "-n".
     * Most consumers won't probably need this.
     * @returns {Promise<Tags>} A resolved Tags promise. If there are errors
     * during reading, the `.errors` field will be present.
     * @memberof ExifTool
     */
    ExifTool.prototype.read = function (file, args) {
        return this.enqueueTask(ReadTask_1.ReadTask.for(file, args));
    };
    /**
     * Write the given `tags` to `file`.
     *
     * @param {string} file an existing file to write `tags` to.
     * @param {Tags} tags the tags to write to `file`.
     * @param {string[]} [args] any additional ExifTool arguments, like "-n".
     * Most consumers won't probably need this.
     * @returns {Promise<void>} Either the promise will be resolved if the
     * tags are written to successfully, or the promise will be rejected if
     * there are errors or warnings.
     * @memberof ExifTool
     */
    ExifTool.prototype.write = function (file, tags, args) {
        return this.enqueueTask(WriteTask_1.WriteTask.for(file, tags, args));
    };
    /**
     * Extract the low-resolution thumbnail in `path/to/image.jpg`
     * and write it to `path/to/thumbnail.jpg`.
     *
     * Note that these images can be less than .1 megapixels in size.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractThumbnail = function (imageFile, thumbnailFile) {
        return this.extractBinaryTag("ThumbnailImage", imageFile, thumbnailFile);
    };
    /**
     * Extract the "preview" image in `path/to/image.jpg`
     * and write it to `path/to/preview.jpg`.
     *
     * The size of these images varies widely, and is present in dSLR images.
     * Canon, Fuji, Olympus, and Sony use this tag.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractPreview = function (imageFile, previewFile) {
        return this.extractBinaryTag("PreviewImage", imageFile, previewFile);
    };
    /**
     * Extract the "JpgFromRaw" image in `path/to/image.jpg`
     * and write it to `path/to/fromRaw.jpg`.
     *
     * This size of these images varies widely, and is not present in all RAW images.
     * Nikon and Panasonic use this tag.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    ExifTool.prototype.extractJpgFromRaw = function (imageFile, outputFile) {
        return this.extractBinaryTag("JpgFromRaw", imageFile, outputFile);
    };
    /**
     * Extract a given binary value from "tagname" tag associated to `path/to/image.jpg`
     * and write it to `dest` (which cannot exist and whose directory must already exist).
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the binary output not be written to `dest`.
     */
    ExifTool.prototype.extractBinaryTag = function (tagname, src, dest) {
        return this.enqueueTask(BinaryExtractionTask_1.BinaryExtractionTask.for(tagname, src, dest));
    };
    /**
     * Shut down running ExifTool child processes. No subsequent requests will be
     * accepted.
     *
     * This may need to be called in `after` or `finally` clauses in tests or
     * scripts for them to exit cleanly.
     */
    ExifTool.prototype.end = function (gracefully) {
        if (gracefully === void 0) { gracefully = true; }
        return this.batchCluster.end(gracefully);
    };
    Object.defineProperty(ExifTool.prototype, "ended", {
        /**
         * @return true if `.end()` has been invoked
         */
        get: function () {
            return this.batchCluster.ended;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `enqueueTask` is not for normal consumption. External code
     * can extend `Task` to add functionality.
     */
    ExifTool.prototype.enqueueTask = function (task) {
        return this.batchCluster.enqueueTask(task);
    };
    Object.defineProperty(ExifTool.prototype, "pids", {
        /**
         * @return the currently running ExifTool processes. Note that on Windows,
         * these are only the process IDs of the directly-spawned ExifTool wrapper,
         * and not the actual perl vm. This should only really be relevant for
         * integration tests that verify processes are cleaned up properly.
         */
        get: function () {
            return this.batchCluster.pids;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExifTool.prototype, "pendingTasks", {
        /**
         * @return the number of pending (not currently worked on) tasks
         */
        get: function () {
            return this.batchCluster.pendingTasks;
        },
        enumerable: true,
        configurable: true
    });
    return ExifTool;
}());
exports.ExifTool = ExifTool;
/**
 * Use this singleton rather than instantiating new ExifTool instances in order
 * to leverage a single running ExifTool process. As of v3.0, its `maxProcs` is
 * set to the number of CPUs on the current system; no more than `maxProcs`
 * instances of `exiftool` will be spawned. You may want to experiment with
 * smaller or larger values for `maxProcs`, depending on CPU and disk speed of
 * your system and performance tradeoffs.
 *
 * Note that each child process consumes between 10 and 50 MB of RAM. If you
 * have limited system resources you may want to use a smaller `maxProcs` value.
 */
exports.exiftool = new ExifTool(exports.DefaultMaxProcs);
//# sourceMappingURL=ExifTool.js.map