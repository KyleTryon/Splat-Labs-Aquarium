export default class HuntFood {
  constructor(params) {
    this.name = "HuntFood";
    this.fish = params.fish;
  }
  getPriority() {
    this._availableFood = this.fish.scene.fishFood;
    if (this._availableFood.getLength() > 0) {
      return 2;
    } else {
      return 0;
    }
  }
  execute() {
    this._availableFood = this.fish.scene.fishFood;
    if (this._availableFood.getLength() > 0) {
      let closestFood = this._availableFood.getChildren().sort((itema, itemb) => {
        let distA = Phaser.Math.Distance.Between(this.fish.x, this.fish.y, itema.x, itema.y);
        let distB = Phaser.Math.Distance.Between(this.fish.x, this.fish.y, itemb.x, itemb.y);
        if (distA > distB) {
          return 1;
        } else if (distA == distB) {
          return 0;
        } else {
          return -1;
        }
      });
      let newTarget = new Phaser.Math.Vector2(closestFood[0].x, closestFood[0].y);
      this.fish.target = newTarget;
      if (this.fish.getDistanceToTartget() < this.fish.width / 4) {
        let energyFromFood = closestFood[0].foodValue;
        this._availableFood.remove(closestFood[0], true);
        this.fish.energy += energyFromFood;
      } else {
        this.fish.swimToTarget(20, 2);
      }
    }
  }
}
