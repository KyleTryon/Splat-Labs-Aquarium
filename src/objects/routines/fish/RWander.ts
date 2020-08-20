import Routine from '../Routine'

import IRoutineParameters from '../IRoutineParameters'

/**
 * Behavior: Randomly swim in tank. Managed by a RoutineManager.
 * @class
 */
export default class RWander extends Routine {

  constructor(parameters: IRoutineParameters){
    super({
      name: "wander",
      priority: 0.1,
      fish: parameters.fish
    })
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