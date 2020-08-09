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
  routines: Array<IRoutines> = []
  fish: Fish


  constructor(params: params) {
    this.fish = params.fish
    this.routines.push(new Wander({
      fish: this.fish
    }))
    this.routines.push(new HuntFood({
      fish: this.fish
    }))
    this.routines.push(new DropLoot({
      fish: this.fish
    }))
  }

  execute(): void {
    // Determine the routine to run and call execute() on it
    let highestPriority = this.routines.sort((routineA: IRoutines, routineB: IRoutines) => {
      if (routineA.getPriority() <= routineB.getPriority()) {
        return 1
      } else {
        return -1
      }
    })
    highestPriority[0].execute()
  }
}