import { IRoutines } from "./IRoutines"
import Fish from "../creatures/Fish"
import Wander from './fish/Wander'
import HuntFood from './fish/HuntFood'
import DropLoot from './fish/DropLoot'

interface params {
  fish: Fish
}

/**
 * Instantiate a RoutineManager on a creature to give it behaviors and priorities.
 * @class
 */
export default class RoutineManager {
  routines: Array<IRoutines>
  fish: Fish

  // //Routines
  // wander: Wander
  // huntFood: HuntFood

  constructor(params: params) {
    let _routines = []
    this.fish = params.fish
    // this.wander = new Wander({
    //   creature: this.creature
    // })
    _routines.push(new Wander({
      fish: this.fish
    }))
    _routines.push(new HuntFood({
      fish: this.fish
    }))
    _routines.push(new DropLoot({
      fish: this.fish
    }))
    this.routines = _routines
  }

  execute(): void {
    // Determine the routine to run and call execute() on it
    let highestPriority = this.routines.sort((routineA: IRoutines, routineB: IRoutines) => {
      let priorityA = routineA.getPriority()
      let priorityB = routineB.getPriority()
      if (priorityA < priorityB) {
        return 1
      } else if (priorityA == priorityB) {
        return 0
      } else {
        return -1
      }
    })

    highestPriority[0].execute()
  }
}