import "https://kyletryon.github.io/Splat-Labs-Aquarium/web_modules/phaser.js";
export default class FishFood extends Phaser.GameObjects.Sprite {
  constructor(params) {
    super(params.scene, params.x, params.y, "fish_food", params.frame);
    this.foodValue = 20;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this._body = this.body;
    this._body.collideWorldBounds = true;
  }
}
