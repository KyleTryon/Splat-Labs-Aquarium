import { IRoutines } from "../IRoutines"
import {Fish} from '../../creatures/Fish'

interface params {
  fish: Fish
}

/**
 * Behavior: Randomly swim in tank. Managed by a RoutineManager.
 * @class
 */
export class Wander implements IRoutines {
  name: string = "Wander"
  fish: Fish
  target

  constructor(params: params) {
    this.fish = params.fish
  }

  getPriority(): number {
    return 1
  }

  execute(): void {
    if ( this.fish.getDistanceToTartget() < 1) {
      this.fish.target = this.getRandomTarget()
    } else {
      this.fish.swimToTarget()
    }
  }

  private getRandomTarget(): Phaser.Math.Vector2 {
    let screenWidth = this.fish.scene.cameras.main.width
    let screenHeight = this.fish.scene.cameras.main.height
    let x = Math.random() * screenWidth
    let y = Math.random() * screenHeight
    console.log("Target Aquired: " + x + " " + y)
    return new Phaser.Math.Vector2(x,y)
  }
}