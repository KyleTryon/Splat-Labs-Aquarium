import "phaser"
import Consumable from '../consumables/Consumable'
/**
 * Fish food. Restores 30 energy
 * @class
 */
export default class FishFood extends Consumable {
  public readonly foodValue: number = 20
  constructor(params) {
    super(params.scene, params.x, params.y, "fish_food", params.frame)
    this._body.gravity = new Phaser.Math.Vector2(0,15)
  }


}