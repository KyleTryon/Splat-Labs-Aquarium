import Routine from './Routine'
import Fish from '../creatures/Fish'

// Import Routines
import RWander from './fish/RWander'
import RHuntFood from './fish/RHuntFood'
import RDropLoot from './fish/RDropLoot'


interface RoutineManagerParameters {
  fish: Fish
}
/**
 * Add and manage routine behaviors for a Creature
 * @class
 */
export default class RoutineManager {
  fish: Fish
  routines: Array<Routine> = []
  activeRoutine: Routine

  constructor(parameters: RoutineManagerParameters) {
    this.fish = parameters.fish
    this.routines.push(
      new RWander({fish: this.fish}),
      new RHuntFood({fish: this.fish}),
      new RDropLoot({fish: this.fish})
      )
  }

  run(): void {
    this.routines.forEach(routine => {
      routine.calcPriority()
    })
    let highestPriority = this.routines.sort((R1: Routine, R2: Routine) => {
      if (R1.priority < R2.priority) {
        return 1
      } else {
        return -1
      }
    })
    this.activeRoutine = highestPriority[0]
    this.activeRoutine.execute()
  }
}