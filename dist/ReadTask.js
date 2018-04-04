"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _dt = require("./DateTime");
var ExifToolTask_1 = require("./ExifToolTask");
var _path = require("path");
var ReadTask = /** @class */ (function (_super) {
    __extends(ReadTask, _super);
    function ReadTask(sourceFile, args) {
        var _this = _super.call(this, args) || this;
        _this.sourceFile = sourceFile;
        var errors = [];
        _this.tags = { SourceFile: sourceFile, errors: errors };
        return _this;
    }
    ReadTask.for = function (filename, optionalArgs) {
        if (optionalArgs === void 0) { optionalArgs = []; }
        var sourceFile = _path.resolve(filename);
        var args = [
            "-json",
            "-coordFormat",
            "%.8f",
            "-fast",
            "-charset",
            "filename=utf8"
        ].concat(optionalArgs, [
            sourceFile
        ]);
        return new ReadTask(sourceFile, args);
    };
    ReadTask.prototype.toString = function () {
        return "ReadTask" + this.sourceFile + ")";
    };
    ReadTask.prototype.parse = function (data) {
        this.rawTags = JSON.parse(data)[0];
        // ExifTool does humorous things to paths, like flip slashes. resolve() undoes that.
        var SourceFile = _path.resolve(this.rawTags.SourceFile);
        // Sanity check that the result is for the file we want:
        if (SourceFile !== this.sourceFile) {
            // Throw an error rather than add an errors string because this is *really* bad:
            throw new Error("Internal error: unexpected SourceFile of " + this.rawTags.SourceFile + " for file " + this.sourceFile);
        }
        return this.parseTags();
    };
    ReadTask.prototype.addError = function (msg) {
        if (this.tags.errors == null) {
            this.tags.errors = [];
        }
        this.tags.errors.push(msg);
    };
    ReadTask.prototype.extractTzoffset = function () {
        // TimeZone wins if we've got it:
        var tze = new _dt.ExifTimeZoneOffset("TimeZone", this.rawTags.TimeZone);
        if (tze.tzOffsetMinutes !== undefined) {
            this.tzoffsetMinutes = tze.tzOffsetMinutes;
        }
        else if (this.rawTags.GPSDateTime != null &&
            this.rawTags.DateTimeOriginal != null) {
            var gps = _dt.parse("GPSDateTime", this.rawTags.GPSDateTime, 0);
            var local = _dt.parse("DateTimeOriginal", this.rawTags.DateTimeOriginal, 0);
            if (gps && local && gps.toDate && local.toDate) {
                // timezone offsets are never less than 30 minutes.
                var gpsToHalfHour = gps.toDate().getTime() / (30 * 60 * 1000);
                var localToHalfHour = local.toDate().getTime() / (30 * 60 * 1000);
                var tzoffsetMinutes = 30 * Math.round(localToHalfHour - gpsToHalfHour);
                if (reasonableTzOffsetMinutes(tzoffsetMinutes)) {
                    this.tzoffsetMinutes = tzoffsetMinutes;
                }
            }
        }
    };
    ReadTask.prototype.parseTags = function () {
        var _this = this;
        this.extractTzoffset();
        Object.keys(this.rawTags).forEach(function (key) {
            ;
            _this.tags[key] = _this.parseTag(key, _this.rawTags[key]);
        });
        return this.tags;
    };
    ReadTask.prototype.parseTag = function (tagName, value) {
        try {
            if (tagName.endsWith("ExifToolVersion") ||
                tagName.endsWith("DateStampMode") ||
                tagName.endsWith("Sharpness") ||
                tagName.endsWith("Firmware") ||
                tagName.endsWith("DateDisplayFormat")) {
                return value.toString(); // force to string
            }
            else if (tagName.endsWith("BitsPerSample")) {
                return value
                    .toString()
                    .split(" ")
                    .map(function (i) { return parseInt(i, 10); });
            }
            else if (tagName.endsWith("FlashFired")) {
                var s = value.toString().toLowerCase();
                return s === "yes" || s === "1" || s === "true";
            }
            else if ((typeof value === "string" && tagName.includes("Date")) ||
                tagName.includes("Time")) {
                return _dt.parse(tagName, value, this.tzoffsetMinutes);
            }
            else if (tagName.endsWith("GPSLatitude") ||
                tagName.endsWith("GPSLongitude")) {
                var ref = this.rawTags[tagName + "Ref"] || value.toString().split(" ")[1];
                if (ref === undefined) {
                    return value; // give up
                }
                else {
                    var direction = ref.trim().toLowerCase();
                    var sorw = direction.startsWith("w") || direction.startsWith("s");
                    return parseFloat(value) * (sorw ? -1 : 1);
                }
            }
            else {
                return value;
            }
        }
        catch (e) {
            this.addError("Failed to parse " + tagName + " with value " + JSON.stringify(value) + ": " + e);
            return value;
        }
    };
    return ReadTask;
}(ExifToolTask_1.ExifToolTask));
exports.ReadTask = ReadTask;
function reasonableTzOffsetMinutes(tzOffsetMinutes) {
    // Pacific/Kiritimati is +14:00 TIL
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    return Math.abs(tzOffsetMinutes) <= 14 * 60;
}
//# sourceMappingURL=ReadTask.js.map