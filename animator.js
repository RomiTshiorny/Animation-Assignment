class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;

        //console.log("width: " + spritesheet.width + " height: " + spritesheet.height)
    }

    drawFrame(tick, ctx, x, y, scale, visible) {
        this.elapsedTime += tick;

        if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            }
            else {
                return;
            }
        }

        let frame = this.currentFrame();
        //console.log(Math.floor(frame/5));
        if (this.reverse) frame = this.frameCount - frame - 1;
        if (visible) { 
        ctx.drawImage(this.spritesheet, this.xStart + (frame % 5) * (this.width + this.framePadding),
            this.yStart + Math.floor(frame / 5) * (this.height + this.framePadding), this.width, this.height, x, y,
            this.width * scale, this.height * scale);
        }

    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }
}