export declare function compact<T>(array: (T | undefined | null)[]): T[];
export declare function pad2(...numbers: number[]): string[];
export declare function pad3(...numbers: number[]): string[];
/**
 * Given a time value in milliseconds, return a decimal in seconds units,
 * rounded to the given precision, without zero right or left padding.
 * @export
 * @param {number} millis [0,1000)
 * @param {number} [precision=6] how many decimal fraction digits to retain
 * @returns {string} the decimal fraction of the second (to maximally
 * microsecond precision)
 */
export declare function millisToFractionalPart(millis: number, precision?: number): string;
export declare abstract class Base {
    protected tz(tzoffsetMinutes: number | undefined): string;
}
/**
 * Encodes an ExifTime (which may not have a timezone offset)
 */
export declare class ExifTime {
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly tzoffsetMinutes: number | undefined;
    private static regex;
    readonly millis: number;
    /**
     * @param hour [1, 23]
     * @param minute [0, 59]
     * @param second [0, 59]
     * @param secondFraction [0,1)
     * @param tzoffsetMinutes [-24 * 60, 24 * 60]
     */
    private constructor();
    static for(input: string, tzoffsetMinutes?: number): ExifTime | undefined;
    toString(): string;
}
/**
 * Encodes an ExifDate
 */
export declare class ExifDate {
    readonly year: number;
    readonly month: number;
    readonly day: number;
    private static regex;
    constructor(year: number, month: number, day: number);
    static for(input: string, tzoffsetMinutes?: number): ExifDate | undefined;
    toString(): string;
    toDate(): Date;
}
/**
 * Encodes an ExifDateTime.
 */
export declare class ExifDateTime extends Base {
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly tzoffsetMinutes: number | undefined;
    private static regex;
    /**
     * Note that this may have fractional precision (123.456ms)
     */
    readonly millis: number;
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
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, secondFraction?: number, tzoffsetMinutes?: number | undefined);
    static for(input: string, tzoffsetMinutes?: number): ExifDateTime | undefined;
    /**
     * Note that this is most likely incorrect if the timezone offset is not set.
     *
     * See the README for details.
     */
    toDate(): Date;
    toString(): string;
    toISOString(millisPrecision?: number): string;
}
export declare class ExifTimeZoneOffset extends Base {
    readonly tagName: string;
    readonly input: string;
    static regex: RegExp;
    readonly tzOffsetMinutes?: number;
    readonly inputWithoutTimezone: string;
    constructor(tagName: string, input: string);
    toString(): string;
}
export declare function parse(tagName: string, rawTagValue: string, globalTzOffsetMinutes?: number): ExifDate | ExifTime | ExifDateTime | ExifTimeZoneOffset | string;
