import Creature from './Creature'
import { AquariumScene } from '../../scenes/AquariumScene'

import RoutineManager from '../routines/RoutineManager'

export default class Fish extends Creature {

  scene: AquariumScene = this.scene
  private _min_flap_delay = 1500
  private _lastFlapTime: number = 0
  public _deltaTime: number
  private routineManager: RoutineManager
  debugText: Phaser.GameObjects.Text
  nameText: Phaser.GameObjects.Text


  public constructor(params) {
    super(params)
    this.target = this.scene.getRandomPoint()
    //Add to scene
    this.create(params.x, params.y)
    // Add Routine Manager
    this.routineManager = new RoutineManager({
      fish: this
    })
    this.debugText = this.scene.add.text(this.x,this.y, "debug")
    this.nameText = this.scene.add.text(this.x,this.y, this.name)
  }

  create(x?: number, y?: number) {
    if (x && y) {
      this.x = x
      this.y = y
    } else {
      let initPosition = this.scene.getRandomPoint()
      this.x = initPosition.x
      this.y = initPosition.y
    }
  }

  update(delta: number): void {
    this._deltaTime = (delta / 100 )
    this.routineManager.run()
    this.debugText.text = this.routineManager.activeRoutine.name + " " + this.routineManager.activeRoutine.priority.toString()
    this.debugText.setPosition(this.x,(this.y - 25))
    this.nameText.setPosition(this.x, (this.y - 50))
  }

  getDistanceToTartget(): number {
    return Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y)
  }

  private rotateToTarget(): void {
    let angleToTarget = Phaser.Math.Angle.Between(this.x, this.y, this.target.x, this.target.y)
    let currentAngle = this.rotation
    let angleDiff = angleToTarget - currentAngle
    if (this.angle < -90 || this.angle > 90) {
      this.flipY = true
    } else {
      this.flipY = false
    }
    this.rotation = currentAngle + (angleDiff * this._deltaTime)
  }

  swimToTarget(power?: number, speedModifier?: number): void {
    power = power || 4
    this.flap(this.target, power, speedModifier)
  }

  flap(toward: Phaser.Math.Vector2, power: number, speedModifier?: number): void {
    this.rotateToTarget()
    speedModifier = speedModifier || 1
    if (Date.now() > this._lastFlapTime) {
      power = this.speed * power
      if (this.energy < power) {
        console.log("Fish is too tired to swim")
      } else {
        this.energy -= (power/20)
        let angle = Phaser.Math.Angle.Between(this.x, this.y, toward.x, toward.y)
        let x = power * Math.cos(angle)
        let y = power * Math.sin(angle)
        let deltaX = this._body.velocity.x + (x - this._body.velocity.x)
        let deltaY = this._body.velocity.y + (y - this._body.velocity.y)
        this._body.setVelocity(deltaX,deltaY)
        this._lastFlapTime = ((Date.now() + (this.getPrecisionVariableOffset())) + (this._min_flap_delay / speedModifier))
      }
    }
  }


}