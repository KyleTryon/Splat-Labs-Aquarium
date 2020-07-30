import Creature from './Creature'
import RoutineManager from '../routines/RoutineManager'

export class Fish extends Creature {

  routineManager: RoutineManager
  scene: Phaser.Scene = this.scene
  max_flap_speed = 1


  public constructor(params) {
    super(params)
    this.desiredDepth = params.desiredDepth
    this.setScale(0.5)
    this.setOrigin(0, 0)
    console.log("I am fish")

    // Add Physics
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)

    // Set Body
    // @ts-ignore
    this._body = this.body

    //Create Routine Manager
    this.routineManager = new RoutineManager({
      fish: this
    })
  }

  update(): void {
    console.log(this.routineManager.routines[0].fish)
    this.routineManager.execute()
    //Moves the fish to opposite side of bowl if off screen.
    this.edgeCheck()
  }

  edgeCheck(): void {
    if (this.x >= (this.scene.cameras.main.width + (this.width / 2))) {
      this.x = 0 - this.width
    }
    if (this.y >= (this.scene.cameras.main.height + (this.height / 2))) {
      this.y = 0 - this.height
    } 
  }

  //Actions
  flap(toward: Phaser.Math.Vector2, power: number) {
    if (this.energy < power) {
      console.log("Fish is too tired to swim")
    } else {
      let angle = Phaser.Math.Angle.Between(this.x, this.y, toward.x, toward.y)
      let x = power * Math.cos(angle)
      let y = power * Math.sin(angle)
      this._body.setVelocity(x,y)
      this.energy -= power
    }
  }
}