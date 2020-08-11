export default class HuntFood {
  constructor(params) {
    this.name = "HuntFood";
    this.fish = params.fish;
    this.priority = 0;
  }
  calcPriority() {
    this._availableFood = this.fish.scene.fishFood;
    if (this._availableFood.getLength() > 0) {
      this.priority = 0.99;
    } else {
      this.priority = 0;
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
      let distToFood = Phaser.Math.Distance.Between(this.fish.x, this.fish.y, closestFood[0].x, closestFood[0].y);
      if (distToFood < 10) {
        let energyFromFood = closestFood[0].foodValue;
        this._availableFood.remove(closestFood[0], true);
        this.fish.energy += energyFromFood;
      } else {
        let foodVelocity = closestFood[0]._body.velocity;
        let newTarget = new Phaser.Math.Vector2(closestFood[0].x + foodVelocity.x * this.fish._deltaTime, closestFood[0].y + foodVelocity.y * this.fish._deltaTime);
        this.fish.target = newTarget;
        this.fish.swimToTarget(20, 2);
      }
    }
  }
}
