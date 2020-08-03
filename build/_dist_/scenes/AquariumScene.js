import Fish2 from "../objects/creatures/Fish.js";
import FishFood from "../objects/consumables/fishFood.js";
export class AquariumScene extends Phaser.Scene {
  constructor() {
    super({
      key: "AquariumScene"
    });
  }
  preload() {
    console.log("Loading Aquarium");
    this.cameras.main.setBackgroundColor(9098211);
  }
  create() {
    this.creatures = new Phaser.GameObjects.Group(this);
    this.fishFood = new Phaser.GameObjects.Group(this);
    this.creatures.add(new Fish2({
      scene: this,
      x: 100,
      y: 100,
      key: "fish_red",
      lifespan: 360,
      name: "test1"
    }));
    this.creatures.add(new Fish2({
      scene: this,
      x: 600,
      y: 600,
      key: "fish_red",
      lifespan: 360,
      name: "test2"
    }));
    this.creatures.add(new Fish2({
      scene: this,
      x: 1000,
      y: 1000,
      key: "fish_red",
      lifespan: 360,
      name: "test3"
    }));
    this.creatures.add(new Fish2({
      scene: this,
      x: 900,
      y: 200,
      key: "fish_red",
      lifespan: 360,
      name: "test4"
    }));
    this.creatures.add(new Fish2({
      scene: this,
      x: 200,
      y: 900,
      key: "fish_red",
      lifespan: 360,
      name: "test4"
    }));
    this.input.on("pointerdown", () => {
      this.fishFood.add(new FishFood({
        scene: this,
        x: this.input.x,
        y: this.input.y
      }));
    });
  }
  update(time, delta) {
    this.creatures.getChildren().forEach((creature) => {
      creature.update(delta);
    });
  }
  getRandomPoint() {
    let screenWidth = this.cameras.main.width;
    let screenHeight = this.cameras.main.height;
    let x = Math.random() * screenWidth;
    let y = Math.random() * screenHeight;
    return new Phaser.Math.Vector2(x, y);
  }
}
