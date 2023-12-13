import { FnArguments } from '../types/utils.type';
declare global {
    interface Window {
        chrome?: unknown;
        InstallTrigger?: unknown;
        safari?: {
            pushNotification: () => void;
        };
    }
}
export declare const userAgent: string;
/** firefox */
export declare const isFirefox: boolean;
/** ie */
export declare const isIE: boolean;
/** edge */
export declare const isEdge: boolean;
/** webkit */
export declare const isWebkit: boolean;
export declare const isIqiyiApp: boolean;
/** chrome */
export declare const isChrome: boolean;
/** safari */
export declare const isSafari: boolean;
export declare function createElement(...args: FnArguments<typeof document['createElement']>): ReturnType<typeof document['createElement']>;
export declare const inBrowser: boolean;
