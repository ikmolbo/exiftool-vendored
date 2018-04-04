import * as bc from "batch-cluster";
export declare function cmd(args: string[]): string;
export declare abstract class ExifToolTask<T> extends bc.Task<T> {
    protected constructor(args: string[]);
    protected abstract parse(input: string): T;
}
