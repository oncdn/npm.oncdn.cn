import { CompareOperator } from 'compare-versions';
export interface MatchOptions {
    includes?: boolean[];
    excludes?: boolean[];
}
export declare function now(): number;
export declare function match(options?: MatchOptions): boolean;
export declare function specificVersionMatch(specific: string, version: string, operator: CompareOperator): boolean;
export declare function getGlobalThis(this: any): typeof globalThis;
