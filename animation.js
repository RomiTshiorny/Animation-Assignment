class Animation{
    constructor(game, x, y) {
        Object.assign( this, { game, x, y } );

        this.game.animation = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/vaderpixelatedsprite.png");

        this.loadAnimations();
    }
    loadAnimations() {
        this.animation = new Animator(this.spritesheet, 0, 0, 193, 109, 300, 0.06, 1, false, true);
    }
    update() {

    }
    draw() {
        this.animation.drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y, 2);
    }
}