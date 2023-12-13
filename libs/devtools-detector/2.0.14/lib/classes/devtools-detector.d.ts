import { DevtoolsDetectorListener } from '../types/devtools-detector-listener.type';
import { DevtoolsStatusChecker } from '../types/devtools-status-checker.type';
export interface DetectorOptions {
    checkers: DevtoolsStatusChecker[];
}
export declare class DevtoolsDetector {
    private readonly _checkers;
    private _listeners;
    private _isOpen;
    private _detectLoopStopped;
    private _detectLoopDelay;
    private _timer;
    constructor({ checkers }: DetectorOptions);
    launch(): void;
    stop(): void;
    isLaunch(): boolean;
    setDetectDelay(value: number): void;
    addListener(listener: DevtoolsDetectorListener): void;
    removeListener(listener: DevtoolsDetectorListener): void;
    private _broadcast;
    private _detectLoop;
}
