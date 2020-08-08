import "phaser"
/**
 * Coin drop. At least... I think it's a coin?
 * @class
 */
export default class FishFood extends Phaser.GameObjects.Sprite {
  _body: Phaser.Physics.Arcade.Body
  public readonly foodValue: number = 20
  constructor(params) {
    super(params.fish.scene, params.fish.x, params.fish.y, "consumable_coin")
    this.setScale(0.25)
    // Add Physics
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    // Set Body
    // @ts-ignore
    this._body = this.body
    this._body.collideWorldBounds = true
    this._body.gravity = new Phaser.Math.Vector2(0,20)
    this.setInteractive()
    this.on('pointerdown', () => {
      this.destroy()
    })
    this.scene.time.delayedCall(16000, () => {
      console.log("Coin destroyed")
      this.destroy()
    })
  }


}