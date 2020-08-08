import "phaser"
/**
 * Something floating in the tank. Maybe click it
 * @class
 */
export default class Consumable extends Phaser.GameObjects.Sprite {
  _body: Phaser.Physics.Arcade.Body
  constructor(scene: Phaser.Scene, x: number, y: number, key: string, frame?: number) {
    super(scene, x, y, key, frame)
    // Add Physics
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    // Set Body
    // @ts-ignore
    this._body = this.body
    this._body.collideWorldBounds = true
  }


}