import { ExifToolTask } from "./ExifToolTask";
import { Tags } from "./Tags";
export declare class ReadTask extends ExifToolTask<Tags> {
    readonly sourceFile: string;
    private rawTags;
    private readonly tags;
    private tzoffsetMinutes;
    private constructor();
    static for(filename: string, optionalArgs?: string[]): ReadTask;
    toString(): string;
    protected parse(data: string): Tags;
    private addError(msg);
    private extractTzoffset();
    private parseTags();
    private parseTag(tagName, value);
}
