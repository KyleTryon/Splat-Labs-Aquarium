import Wander2 from "./fish/Wander.js";
import HuntFood2 from "./fish/HuntFood.js";
import DropLoot2 from "./fish/DropLoot.js";
export default class RoutineManager {
  constructor(params) {
    this.routines = [];
    this.fish = params.fish;
    this.routines.push(new Wander2({
      fish: this.fish
    }));
    this.routines.push(new HuntFood2({
      fish: this.fish
    }));
    this.routines.push(new DropLoot2({
      fish: this.fish
    }));
  }
  execute() {
    this.routines.forEach((routine) => {
      routine.calcPriority();
    });
    let highestPriority = this.routines.sort((routineA, routineB) => {
      if (routineA.priority <= routineB.priority) {
        return 1;
      } else {
        return -1;
      }
    });
    highestPriority[0].execute();
  }
}
