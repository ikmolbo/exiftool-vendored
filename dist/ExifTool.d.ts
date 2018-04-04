import * as bc from "batch-cluster";
import { ExifToolTask } from "./ExifToolTask";
import { Tags } from "./Tags";
export { Tags } from "./Tags";
export { ExifDate, ExifTime, ExifDateTime, ExifTimeZoneOffset } from "./DateTime";
export declare const DefaultExifToolPath: string;
export declare type WriteTags = {
    [K in keyof Tags]: string | number;
};
export declare const DefaultMaxProcs: number;
/**
 * Manages delegating calls to a vendored running instance of ExifTool.
 *
 * Instances should be shared: consider using the exported singleton
 * instance of this class, `exiftool`.
 */
export declare class ExifTool {
    readonly maxProcs: number;
    readonly maxTasksPerProcess: number;
    readonly spawnTimeoutMillis: number;
    readonly taskTimeoutMillis: number;
    readonly onIdleIntervalMillis: number;
    readonly taskRetries: number;
    readonly batchClusterOpts: Partial<bc.BatchClusterOptions & bc.BatchProcessOptions>;
    readonly exiftoolPath: string;
    private readonly batchCluster;
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
    constructor(maxProcs?: number, maxTasksPerProcess?: number, spawnTimeoutMillis?: number, taskTimeoutMillis?: number, onIdleIntervalMillis?: number, taskRetries?: number, batchClusterOpts?: Partial<bc.BatchClusterOptions & bc.BatchProcessOptions>, exiftoolPath?: string);
    /**
     * @return a promise holding the version number of the vendored ExifTool
     */
    version(): Promise<string>;
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
    read(file: string, args?: string[]): Promise<Tags>;
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
    write(file: string, tags: WriteTags, args?: string[]): Promise<void>;
    /**
     * Extract the low-resolution thumbnail in `path/to/image.jpg`
     * and write it to `path/to/thumbnail.jpg`.
     *
     * Note that these images can be less than .1 megapixels in size.
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the file could not be read or the output not written.
     */
    extractThumbnail(imageFile: string, thumbnailFile: string): Promise<void>;
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
    extractPreview(imageFile: string, previewFile: string): Promise<void>;
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
    extractJpgFromRaw(imageFile: string, outputFile: string): Promise<void>;
    /**
     * Extract a given binary value from "tagname" tag associated to `path/to/image.jpg`
     * and write it to `dest` (which cannot exist and whose directory must already exist).
     *
     * @return a `Promise<void>`. An `Error` is raised if
     * the binary output not be written to `dest`.
     */
    extractBinaryTag(tagname: string, src: string, dest: string): Promise<void>;
    /**
     * Shut down running ExifTool child processes. No subsequent requests will be
     * accepted.
     *
     * This may need to be called in `after` or `finally` clauses in tests or
     * scripts for them to exit cleanly.
     */
    end(gracefully?: boolean): Promise<void>;
    /**
     * @return true if `.end()` has been invoked
     */
    readonly ended: boolean;
    /**
     * `enqueueTask` is not for normal consumption. External code
     * can extend `Task` to add functionality.
     */
    enqueueTask<T>(task: ExifToolTask<T>): Promise<T>;
    /**
     * @return the currently running ExifTool processes. Note that on Windows,
     * these are only the process IDs of the directly-spawned ExifTool wrapper,
     * and not the actual perl vm. This should only really be relevant for
     * integration tests that verify processes are cleaned up properly.
     */
    readonly pids: number[];
    /**
     * @return the number of pending (not currently worked on) tasks
     */
    readonly pendingTasks: number;
}
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
export declare const exiftool: ExifTool;
