import "https://kyletryon.github.io/Splat-Labs-Aquarium/web_modules/phaser.js";
import Consumable2 from "../consumables/Consumable.js";
export default class FishFood extends Consumable2 {
  constructor(params) {
    super(params.scene, params.x, params.y, "fish_food", params.frame);
    this.foodValue = 20;
    this._body.gravity = new Phaser.Math.Vector2(0, 15);
  }
}
