export default class Wander {
  constructor(params) {
    this.name = "Wander";
    this.fish = params.fish;
    this.priority = 0.1;
  }
  calcPriority() {
    this.priority = 0.1;
  }
  execute() {
    if (this.fish.getDistanceToTartget() < 4) {
      this.fish.target = this.fish.scene.getRandomPoint();
    } else {
      this.fish.swimToTarget();
    }
  }
}
