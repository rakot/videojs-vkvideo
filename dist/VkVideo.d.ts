interface VkVideoPlayer {
    destroy(): void;
    on(eventName: string, handler: (...args: any[]) => void): void;
    off?(eventName: string, handler: (...args: any[]) => void): void;
    play(): void;
    pause(): void;
    getDuration(): number;
    seek(seconds: number): void;
    seekTo(seconds: number): void;
    setCurrentTime(seconds: number): void;
    setVolume(volume: number): void;
    mute(): void;
    unmute(): void;
}
declare global {
    interface Window {
        VK?: {
            VideoPlayer?: new (iframe: HTMLIFrameElement) => VkVideoPlayer;
        };
    }
}
declare const VkVideoTech_base: any;
declare class VkVideoTech extends VkVideoTech_base {
    private _iframe;
    private _vkPlayer;
    private _isReady;
    private _duration;
    private _currentTime;
    private _paused;
    private _muted;
    private _volume;
    private _boundOnMessage;
    private _eventUnsubs;
    private isSeeking;
    private wasPausedBeforeSeek;
    private checkSeekedInPauseInterval;
    protected options_: any;
    protected el_: HTMLDivElement;
    constructor(options: any, ready?: () => void);
    createEl(): HTMLDivElement;
    dispose(): void;
    parseUrl(url: string): {
        id: string | null;
        ownerId: string | null;
    };
    getEmbedUrl(src: string): string;
    _setup(): Promise<void>;
    _wireEvents(): void;
    src(src: string): string;
    setSrc(src: string): void;
    play(): Promise<void>;
    seeking(): boolean;
    seekable(): any;
    onSeeked(): void;
    playbackRate(): number;
    pause(): void;
    paused(): boolean;
    currentTime(): number;
    setCurrentTime(seconds: number): number;
    duration(): number;
    ended(): boolean;
    volume(): number;
    setVolume(v: number): void;
    muted(): boolean;
    setMuted(m: boolean): void;
    supportsFullScreen(): boolean;
    setPoster(): void;
    buffered(): any;
    static isSupported(): boolean;
    static canPlayType(e: string): boolean;
    static canPlaySource(e: any): boolean;
}
export default VkVideoTech;
