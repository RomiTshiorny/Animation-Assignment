class Animation{
    constructor(game, x, y) {
        Object.assign( this, { game, x, y } );

        this.pixelate = false;
        this.game.animation = this;
        this.spritesheetHD = ASSET_MANAGER.getAsset("./sprites/vaderhdsprite.png");
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/vadersprite.png");

        this.loadAnimations();
    }
    loadAnimations() {
        this.animationHD = new Animator(this.spritesheetHD, 0, 0, 801, 336, 300, 0.06, 1, false, true);
        this.animation = new Animator(this.spritesheet, 0, 0, 801, 336, 300, 0.06, 1, false, true);
    }
    update() {
        //console.log(document.getElementById("pixelate").checked);
        this.pixelate = document.getElementById("pixelate").checked;
    }
    draw() {
        this.animation.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 2, this.pixelate
        );
        this.animationHD.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 2,!this.pixelate);
        
    }
}