
// Interfaces and types

type URLMotionFrame = string;
type URLMotionFrames = URLMotionFrame[];

// URL motion class

class URLMotion {
    private frames: URLMotionFrames;
    private duration: number = 1000;
    private interval: ReturnType<typeof setInterval>;

    private index: number = 0;

    constructor(frames: URLMotionFrames, duration: number = 1000) {
        this.frames = frames;
        this.duration = duration;
    }

    public start(callback: (i: number) => void = undefined) {
        if (this.frames.length == 0) { return; }

        // We increment it later since indexes start at 0
        this.index = -1;
        this.interval = setInterval(() => {
            this.index++;

            if (this.index > (this.frames.length-1)) {
                this.index = 0;
            }

            this.showFrame();
            if (typeof callback !== "undefined") {
                callback(this.index);
            }
        }, this.duration)
    }

    public stop() {
        clearInterval(this.interval);
        window.location.hash = '';
    }

    private showFrame() {
        console.log(this.frames)
        console.log(this.index)
        window.location.hash = `#${this.frames[this.index]}`;
    }
};

// Predefined animations

var PredefinedURLMotions = {
    threeDots(message: string = "Loading"): URLMotionFrames {
        return [`${message}.`, `${message}..`, `${message}...`]
    },

    arrowSpinner(): URLMotionFrames {
        return ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"];
    },

    verticalBars(): URLMotionFrames {
        return "▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃ ▁".split(" ");
    }
} 
