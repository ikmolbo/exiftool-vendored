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
var ExifToolTask_1 = require("./ExifToolTask");
var _path = require("path");
var successRE = /1 image files? updated/;
// See https://sno.phy.queensu.ca/%7Ephil/exiftool/faq.html#Q10
// (`-charset utf8` is set by default)
var utfCharsetArgs = ["-charset", "filename=utf8", "-codedcharacterset=utf8"];
var WriteTask = /** @class */ (function (_super) {
    __extends(WriteTask, _super);
    function WriteTask(sourceFile, args) {
        var _this = _super.call(this, args) || this;
        _this.sourceFile = sourceFile;
        _this.args = args;
        return _this;
    }
    WriteTask.for = function (filename, tags, optionalArgs) {
        if (optionalArgs === void 0) { optionalArgs = []; }
        var sourceFile = _path.resolve(filename);
        var args = Object.keys(tags)
            .filter(function (k) { return typeof k === "string" && tags.propertyIsEnumerable(k); })
            .map(function (key) { return "-" + key + "=" + tags[key]; });
        optionalArgs.forEach(function (ea) { return args.push(ea); });
        utfCharsetArgs.forEach(function (ea) { return args.push(ea); });
        args.push(sourceFile);
        return new WriteTask(sourceFile, args);
    };
    WriteTask.prototype.toString = function () {
        return "WriteTask(" + this.sourceFile + ")";
    };
    WriteTask.prototype.parse = function (data) {
        data = data.trim();
        if (successRE.exec(data) != null) {
            return;
        }
        else {
            throw new Error(data);
        }
    };
    return WriteTask;
}(ExifToolTask_1.ExifToolTask));
exports.WriteTask = WriteTask;
//# sourceMappingURL=WriteTask.js.map