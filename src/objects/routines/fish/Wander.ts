import { IRoutines } from "../IRoutines"
import Fish from '../../creatures/Fish'

interface params {
  fish: Fish
}

/**
 * Behavior: Randomly swim in tank. Managed by a RoutineManager.
 * @class
 */
export default class Wander implements IRoutines {
  name: string = "Wander"
  fish: Fish
  priority: number

  constructor(params: params) {
    this.fish = params.fish
    this.priority = 0.1
  }

  calcPriority(): void {
    this.priority = 0.1
  }

  execute(): void {
    if ( this.fish.getDistanceToTartget() < 4) {
      this.fish.target = this.fish.scene.getRandomPoint()
    } else {
      this.fish.swimToTarget()
    }
  }

}