import Creature from './Creature'
import RoutineManager from '../routines/RoutineManager'
import { AquariumScene } from '../../scenes/AquariumScene'
import { Time } from 'phaser'

export default class Fish extends Creature {

  routineManager: RoutineManager
  scene: AquariumScene = this.scene
  max_flap_speed = 1
  private _lastFlapTime: number = 0
  private _deltaTime: number


  public constructor(params) {
    super(params)
    this.desiredDepth = params.desiredDepth
    this.setScale(0.5)
    this.setOrigin(0.5, 0.5)
    this.target = this.scene.getRandomPoint()

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

  update(delta: number): void {
    this._deltaTime = (delta / 100 )
    this.routineManager.execute()
    //Moves the fish to opposite side of bowl if off screen.
    this.edgeCheck()
    this.rotateToTarget()
  }

  getDistanceToTartget(): number {
    return Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y)
  }

  private edgeCheck(): void {
    if (this.x >= (this.scene.cameras.main.width + (this.width / 2))) {
      this.x = 0 - this.width
    }
    if (this.y >= (this.scene.cameras.main.height + (this.height / 2))) {
      this.y = 0 - this.height
    } 
  }
  private rotateToTarget(): void {
    let angleToTarget = Phaser.Math.Angle.Between(this.x, this.y, this.target.x, this.target.y)
    let currentAngle = this.rotation
    let angleDiff = angleToTarget - currentAngle
    if (this.angle < -90 || this.angle > 160){
      this.flipY = true
    } else {
      this.flipY = false
    }
    this.rotation = currentAngle + (angleDiff * this._deltaTime)
  }

  swimToTarget(speedModifier?: number): void {
    speedModifier = speedModifier || 4
    this.flap(this.target, speedModifier)
  }

  flap(toward: Phaser.Math.Vector2, power: number): void {
    if (Date.now() > this._lastFlapTime) {
      power = this.speed * power
      if (this.energy < power) {
        console.log("Fish is too tired to swim")
      } else {
        let angle = Phaser.Math.Angle.Between(this.x, this.y, toward.x, toward.y)
        let x = power * Math.cos(angle)
        let y = power * Math.sin(angle)
        this._body.setVelocity(x,y)
        this.energy -= (power/10)
        this._lastFlapTime = (Date.now() + (2000 * this.max_flap_speed))
      }
    }
  }
}