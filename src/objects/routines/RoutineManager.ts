import { IRoutines } from "./IRoutines"
import Fish from "../creatures/Fish"
import { Wander } from './fish/Wander'

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

  //Routines
  wander: Wander

  constructor(params: params) {
    let _routines = []
    this.fish = params.fish
    // this.wander = new Wander({
    //   creature: this.creature
    // })
    _routines.push(new Wander({
      fish: this.fish
    }))
    this.routines = _routines
  }

  execute(): void {
    // Determine the routine to run and call execute() on it
    this.routines[0].execute()
  }
}