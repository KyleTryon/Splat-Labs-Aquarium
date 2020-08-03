export default class Wander {
  constructor(params) {
    this.name = "Wander";
    this.fish = params.fish;
  }
  getPriority() {
    return 1;
  }
  execute() {
    if (this.fish.getDistanceToTartget() < 4) {
      this.fish.target = this.fish.scene.getRandomPoint();
    } else {
      this.fish.swimToTarget();
    }
  }
}
