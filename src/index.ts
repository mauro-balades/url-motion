import { URLMotionFrames, URLMotionFrame } from "./frame";

export class URLMotion {
    private frames: URLMotionFrames;
    private duration: number = 1000;
    private interval: ReturnType<typeof setInterval>;

    private index: number = 0;

    constructor(frames: URLMotionFrames, duration: number = 1000) {
        this.frames = frames;
        this.duration = duration;
    }

    public start(callback: (i: number) => void = undefined) {
        this.interval = setInterval(() => {
            this.index++;

            if (this.index > this.frames.length) {
                this.index = 0;
            }


            if (!(callback instanceof undefined)) {
                callback(this.index);
            }
        }, this.duration)
    }

    public stop() {
        clearInterval(this.interval);
        window.location.hash = '';
    }

    private showFrame() {
        
    }
};
