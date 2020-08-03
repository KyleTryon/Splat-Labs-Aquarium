import "phaser"
/**
 * Fish food. Restores 30 energy
 * @class
 */
export default class FishFood extends Phaser.GameObjects.Sprite {
  _body: Phaser.Physics.Arcade.Body
  public readonly foodValue: number = 20
  constructor(params) {
    super(params.scene, params.x, params.y, "fish_food", params.frame)
    // Add Physics
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    // Set Body
    // @ts-ignore
    this._body = this.body
    this._body.collideWorldBounds = true
  }


}