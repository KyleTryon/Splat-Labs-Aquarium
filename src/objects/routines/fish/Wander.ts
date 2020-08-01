import { IRoutines } from "../IRoutines"
import Fish from '../../creatures/Fish'

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
  target: Phaser.Math.Vector2

  constructor(params: params) {
    this.fish = params.fish
  }

  getPriority(): number {
    return 1
  }

  execute(): void {
    if ( this.fish.getDistanceToTartget() < 4) {
      this.fish.target = this.fish.scene.getRandomPoint()
    } else {
      this.fish.swimToTarget()
    }
  }

}