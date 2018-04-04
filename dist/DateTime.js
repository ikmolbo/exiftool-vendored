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
function compact(array) {
    return array.filter(function (elem) { return elem != null; });
}
exports.compact = compact;
function pad2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.map(function (i) {
        var s = i.toString(10);
        return s.length >= 2 ? s : "0" + s;
    });
}
exports.pad2 = pad2;
function pad3() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.map(function (i) {
        if (i < 0) {
            var s = Math.abs(i).toString(10);
            return "-" + (s.length >= 2 ? s : "0" + s);
        }
        else {
            return ("000" + i).slice(Math.min(-3, -Math.ceil(Math.log10(i))));
        }
    });
}
exports.pad3 = pad3;
/**
 * Given a time value in milliseconds, return a decimal in seconds units,
 * rounded to the given precision, without zero right or left padding.
 * @export
 * @param {number} millis [0,1000)
 * @param {number} [precision=6] how many decimal fraction digits to retain
 * @returns {string} the decimal fraction of the second (to maximally
 * microsecond precision)
 */
function millisToFractionalPart(millis, precision) {
    if (precision === void 0) { precision = 6; }
    var frac = (millis / 1000).toPrecision(precision).split("");
    if (frac[0] === "0")
        frac.shift(); // pop off the initial "0"
    // strip off microsecond zero padding:
    while (frac.length > 4 && frac[frac.length - 1] === "0") {
        frac.pop();
    }
    return frac.join("");
}
exports.millisToFractionalPart = millisToFractionalPart;
function maybeNew(input, tzoffsetMinutes, re, ctor) {
    var match = re.exec(input);
    if (match !== null) {
        var args = match.slice(1).map(function (ea) { return parseNum((ea || "").trim()); });
        if (tzoffsetMinutes != null) {
            args.push(tzoffsetMinutes);
        }
        return ctor(args);
    }
    else {
        return;
    }
}
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.tz = function (tzoffsetMinutes) {
        if (tzoffsetMinutes === undefined) {
            return "";
        }
        else if (tzoffsetMinutes === 0) {
            return "Z";
        }
        else {
            var sign = tzoffsetMinutes >= 0 ? "+" : "-";
            var tzoff = Math.abs(tzoffsetMinutes);
            var hours = Math.floor(tzoff / 60);
            var mins = tzoff - hours * 60;
            return "" + sign + pad2(hours) + ":" + pad2(mins);
        }
    };
    return Base;
}());
exports.Base = Base;
/**
 * Encodes an ExifTime (which may not have a timezone offset)
 */
var ExifTime = /** @class */ (function () {
    /**
     * @param hour [1, 23]
     * @param minute [0, 59]
     * @param second [0, 59]
     * @param secondFraction [0,1)
     * @param tzoffsetMinutes [-24 * 60, 24 * 60]
     */
    function ExifTime(hour, minute, second, secondFraction, tzoffsetMinutes) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.tzoffsetMinutes = tzoffsetMinutes;
        this.millis = secondFraction != null ? secondFraction * 1000 : 0;
    }
    ExifTime.for = function (input, tzoffsetMinutes) {
        var _this = this;
        return maybeNew(input, tzoffsetMinutes, this.regex, function (a) {
            return new _this(a[0], a[1], a[2], a[3], a[4]);
        });
    };
    ExifTime.prototype.toString = function () {
        return (pad2(this.hour, this.minute, this.second).join(":") +
            millisToFractionalPart(this.millis));
    };
    ExifTime.regex = /^(\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?$/;
    return ExifTime;
}());
exports.ExifTime = ExifTime;
/**
 * Encodes an ExifDate
 */
var ExifDate = /** @class */ (function () {
    function ExifDate(year, // four-digit year
    month, // 1-12, (no crazy 0-11 nonsense from Date!)
    day // 1-31
    ) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    ExifDate.for = function (input, tzoffsetMinutes) {
        var _this = this;
        return maybeNew(input, tzoffsetMinutes, this.regex, function (a) {
            return new _this(a[0], a[1], a[2]);
        });
    };
    ExifDate.prototype.toString = function () {
        return this.year + "-" + pad2(this.month) + "-" + pad2(this.day);
    };
    ExifDate.prototype.toDate = function () {
        return new Date(this.year, this.month - 1, this.day);
    };
    ExifDate.regex = /^(\d{4}):(\d{2}):(\d{2})$/;
    return ExifDate;
}());
exports.ExifDate = ExifDate;
/**
 * Encodes an ExifDateTime.
 */
var ExifDateTime = /** @class */ (function (_super) {
    __extends(ExifDateTime, _super);
    /**
     * @param year full 4-digit value
     * @param month 1-12, no crazy 0-11 nonsense
     * @param day 1-31
     * @param hour 1-23
     * @param minute 0-59
     * @param second 0-59
     * @param secondFraction `[0-1)`
     * @param tzoffsetMinutes
     */
    function ExifDateTime(year, month, day, hour, minute, second, secondFraction, tzoffsetMinutes) {
        var _this = _super.call(this) || this;
        _this.year = year;
        _this.month = month;
        _this.day = day;
        _this.hour = hour;
        _this.minute = minute;
        _this.second = second;
        _this.tzoffsetMinutes = tzoffsetMinutes;
        _this.millis = secondFraction != null ? secondFraction * 1000 : 0;
        return _this;
    }
    ExifDateTime.for = function (input, tzoffsetMinutes) {
        return maybeNew(input, tzoffsetMinutes, this.regex, function (a) {
            return new ExifDateTime(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
        });
    };
    /**
     * Note that this is most likely incorrect if the timezone offset is not set.
     *
     * See the README for details.
     */
    ExifDateTime.prototype.toDate = function () {
        if (this.tzoffsetMinutes == null) {
            var d = new Date();
            d.setFullYear(this.year, this.month - 1, this.day);
            d.setHours(this.hour, this.minute, this.second, Math.round(this.millis));
            return d;
        }
        else if (this.tzoffsetMinutes === 0) {
            // Don't leave it up to string parsing
            return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, Math.round(this.millis)));
        }
        else {
            return new Date(this.toISOString());
        }
    };
    ExifDateTime.prototype.toString = function () {
        return this.toISOString();
    };
    ExifDateTime.prototype.toISOString = function (millisPrecision) {
        if (millisPrecision === void 0) { millisPrecision = 6; }
        var _a = pad2(this.month, this.day, this.hour, this.minute, this.second), mo = _a[0], da = _a[1], ho = _a[2], mi = _a[3], se = _a[4];
        var ms = millisToFractionalPart(this.millis, millisPrecision);
        var tz = this.tz(this.tzoffsetMinutes);
        return this.year + "-" + mo + "-" + da + "T" + ho + ":" + mi + ":" + se + ms + tz;
    };
    // The timezone offset will be extricated prior to this regex:
    ExifDateTime.regex = /^(\d{4})[ :]+(\d{2})[ :]+(\d{2})[ :]+(\d{2})[ :]+(\d{2})[ :]+(\d{2})(\.\d{1,9})?$/;
    return ExifDateTime;
}(Base));
exports.ExifDateTime = ExifDateTime;
function parseNum(s) {
    if (s.indexOf(".") !== -1) {
        return parseFloat("0" + s);
    }
    else {
        return parseInt("0" + s, 10);
    }
}
var ExifTimeZoneOffset = /** @class */ (function (_super) {
    __extends(ExifTimeZoneOffset, _super);
    function ExifTimeZoneOffset(tagName, input) {
        var _this = _super.call(this) || this;
        _this.tagName = tagName;
        _this.input = input;
        if (input === undefined) {
            _this.tzOffsetMinutes = undefined;
            _this.inputWithoutTimezone = input;
        }
        else if (tagName.includes("UTC") ||
            tagName.includes("GPS") ||
            input.toString().endsWith("Z")) {
            _this.tzOffsetMinutes = 0;
            _this.inputWithoutTimezone = input.endsWith("Z")
                ? input.slice(0, -1)
                : input;
        }
        else {
            var match = ExifTimeZoneOffset.regex.exec(input);
            if (match) {
                var wholeMatch = match[0], offsetSignS = match[1], hourOffsetS = match[2], minuteOffsetS = match[3];
                var offsetSign = offsetSignS === "-" ? -1 : 1;
                var hourOffset = parseInt(hourOffsetS, 10);
                var minuteOffset = parseInt(minuteOffsetS, 10);
                _this.tzOffsetMinutes = offsetSign * (hourOffset * 60 + minuteOffset);
                _this.inputWithoutTimezone = input.slice(0, -1 * wholeMatch.length);
            }
            else {
                _this.tzOffsetMinutes = undefined;
                _this.inputWithoutTimezone = input;
            }
        }
        return _this;
    }
    ExifTimeZoneOffset.prototype.toString = function () {
        return this.tz(this.tzOffsetMinutes);
    };
    ExifTimeZoneOffset.regex = /([-+])(\d{2}):(\d{2})$/;
    return ExifTimeZoneOffset;
}(Base));
exports.ExifTimeZoneOffset = ExifTimeZoneOffset;
var emptyRe = /^[\s:0]*$/; // Empty datetimes come back as "  :  :  " or "00:00:00"
function parse(tagName, rawTagValue, globalTzOffsetMinutes) {
    if (rawTagValue === undefined || emptyRe.exec(rawTagValue)) {
        return rawTagValue;
    }
    var tz = new ExifTimeZoneOffset(tagName, rawTagValue);
    // If it's just a timezone:
    if (tz.tzOffsetMinutes != null && emptyRe.exec(tz.inputWithoutTimezone)) {
        return tz;
    }
    var tzoffset = compact([tz.tzOffsetMinutes, globalTzOffsetMinutes])[0];
    var tagValue = tz.inputWithoutTimezone;
    return (ExifDateTime.for(tagValue, tzoffset) ||
        ExifDate.for(tagValue, tzoffset) ||
        ExifTime.for(tagValue, tzoffset) ||
        rawTagValue);
}
exports.parse = parse;
//# sourceMappingURL=DateTime.js.map