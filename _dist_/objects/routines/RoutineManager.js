import Wander2 from "./fish/Wander.js";
import HuntFood2 from "./fish/HuntFood.js";
export default class RoutineManager {
  constructor(params) {
    let _routines = [];
    this.fish = params.fish;
    _routines.push(new Wander2({
      fish: this.fish
    }));
    _routines.push(new HuntFood2({
      fish: this.fish
    }));
    this.routines = _routines;
  }
  execute() {
    let highestPriority = this.routines.sort((routineA, routineB) => {
      let priorityA = routineA.getPriority();
      let priorityB = routineB.getPriority();
      if (priorityA < priorityB) {
        return 1;
      } else if (priorityA == priorityB) {
        return 0;
      } else {
        return -1;
      }
    });
    highestPriority[0].execute();
  }
}
