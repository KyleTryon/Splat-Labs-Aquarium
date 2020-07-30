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

  constructor(params: params) {
    this.fish = params.fish
  }

  getPriority(): number {
    return 1
  }

  execute(): void {
    if (Phaser.Math.Distance.Between(this.fish.x, this.fish.y, this.fish.target.x, this.fish.target.y) < 5) {
      this.fish.target = this.getRandomTarget()
    } else {
      this.fish.flap(this.fish.target, 20)
    }
  }

  private getRandomTarget(): Phaser.Math.Vector2 {
    let screenWidth = this.fish.scene.cameras.main.width
    let screenHeight = this.fish.scene.cameras.main.height
    let x = Math.random() * screenWidth
    let y = Math.random() * screenHeight
    return new Phaser.Math.Vector2(x,y)
  }
}