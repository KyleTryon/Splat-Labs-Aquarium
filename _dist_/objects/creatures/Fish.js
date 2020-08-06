import Creature2 from "./Creature.js";
import RoutineManager2 from "../routines/RoutineManager.js";
export default class Fish extends Creature2 {
  constructor(params) {
    super(params);
    this.scene = this.scene;
    this.max_flap_speed = 1;
    this._lastFlapTime = 0;
    this.setScale(0.5);
    this.setOrigin(0.5, 0.5);
    this.target = this.scene.getRandomPoint();
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this._body = this.body;
    this.routineManager = new RoutineManager2({
      fish: this
    });
    this.create(params.x, params.y);
  }
  create(x, y) {
    if (x && y) {
      this.x = x;
      this.y = y;
    } else {
      let initPosition = this.scene.getRandomPoint();
      this.x = initPosition.x;
      this.y = initPosition.y;
    }
  }
  update(delta) {
    this._deltaTime = delta / 100;
    this.routineManager.execute();
    this.edgeCheck();
    this.rotateToTarget();
  }
  getDistanceToTartget() {
    return Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y);
  }
  edgeCheck() {
    if (this.x >= this.scene.cameras.main.width + this.width / 2) {
      this.x = 0 - this.width;
    }
    if (this.y >= this.scene.cameras.main.height + this.height / 2) {
      this.y = 0 - this.height;
    }
  }
  rotateToTarget() {
    let angleToTarget = Phaser.Math.Angle.Between(this.x, this.y, this.target.x, this.target.y);
    let currentAngle = this.rotation;
    let angleDiff = angleToTarget - currentAngle;
    if (this.angle < -90 || this.angle > 90) {
      this.flipY = true;
    } else {
      this.flipY = false;
    }
    this.rotation = currentAngle + angleDiff * this._deltaTime;
  }
  swimToTarget(power, speedModifier) {
    power = power || 4;
    this.flap(this.target, power, speedModifier);
  }
  flap(toward, power, speedModifier) {
    speedModifier = speedModifier || 1;
    if (Date.now() > this._lastFlapTime) {
      power = this.speed * power;
      if (this.energy < power) {
        console.log("Fish is too tired to swim");
      } else {
        this.energy -= power / 20;
        let angle = Phaser.Math.Angle.Between(this.x, this.y, toward.x, toward.y);
        let x = power * Math.cos(angle);
        let y = power * Math.sin(angle);
        let deltaX = this._body.velocity.x + (x - this._body.velocity.x);
        let deltaY = this._body.velocity.y + (y - this._body.velocity.y);
        this._body.setVelocity(deltaX, deltaY);
        this._lastFlapTime = Date.now() + this.getPrecisionVariableOffset() + 2000 / speedModifier;
      }
    }
  }
}
