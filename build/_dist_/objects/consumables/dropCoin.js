import "https://kyletryon.github.io/Splat-Labs-Aquarium/web_modules/phaser.js";
export default class FishFood extends Phaser.GameObjects.Sprite {
  constructor(params) {
    super(params.fish.scene, params.fish.x, params.fish.y, "consumable_coin");
    this.foodValue = 20;
    this.setScale(0.18);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this._body = this.body;
    this._body.collideWorldBounds = true;
    this._body.gravity = new Phaser.Math.Vector2(0, 20);
    this.setInteractive();
    this.on("pointerdown", () => {
      this.destroy();
    });
    this.scene.time.delayedCall(16000, () => {
      console.log("Coin destroyed");
      this.destroy();
    });
  }
}
