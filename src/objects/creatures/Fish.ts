import Creature from './Creature'

export class Fish extends Creature {
  public constructor(params) {
    super(params)
    this.setScale(0.5)
    this.setOrigin(0, 0)
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    console.log("Fish generated")
  }


  swim() :void {
    if (this.x >= (this.scene.cameras.main.width + (this.width / 2))) {
      this.x = 0 - this.width
    } else {
      //(this.body as Phaser.Physics.Arcade.Body).setVelocity(1,0)
      this.setV
    }
  }
}