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
var bc = require("batch-cluster");
function cmd(args) {
    return args.concat(["-ignoreMinorErrors", "-execute", ""]).join("\n");
}
exports.cmd = cmd;
var ExifToolTask = /** @class */ (function (_super) {
    __extends(ExifToolTask, _super);
    function ExifToolTask(args) {
        var _this = _super.call(this, cmd(args), function (data) { return _this.parse(data); }) || this;
        return _this;
    }
    return ExifToolTask;
}(bc.Task));
exports.ExifToolTask = ExifToolTask;
//# sourceMappingURL=ExifToolTask.js.map