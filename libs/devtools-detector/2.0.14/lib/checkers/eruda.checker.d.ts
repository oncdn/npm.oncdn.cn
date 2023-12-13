import { DevtoolsStatusChecker } from '../types/devtools-status-checker.type';
declare global {
    const eruda: {
        _devTools?: {
            _isShow?: boolean;
        };
    } | undefined;
}
export declare const erudaChecker: DevtoolsStatusChecker;
