import "https://kyletryon.github.io/Splat-Labs-Aquarium/web_modules/phaser.js";
export default class Consumable extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this._body = this.body;
    this._body.collideWorldBounds = true;
  }
}
