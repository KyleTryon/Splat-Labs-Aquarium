import RoutineParameters from "./IRoutineParameters"
import Fish from '../creatures/Fish'
/**
 * Define a routine class which can influence the activity of a creature. Creatures will execute routines based on the priority value.
 * @Class
 */
export default class Routine {
  priority: number
  name: string
  fish: Fish

  constructor(parameters: RoutineParameters) {
    this.priority = parameters.priority || 0.1
    this.name = parameters.name
    this.fish = parameters.fish
  }

  calcPriority(): void {
    //Calculate the current priority level. Higher priority levels have a higher chance of being executed.
  }

  execute(): void {
    //Perform some action for the routine
  }

}