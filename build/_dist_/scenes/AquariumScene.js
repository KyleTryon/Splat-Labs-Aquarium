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
    this.loadAquarium();
    this.input.on("pointerdown", () => {
      this.fishFood.add(new FishFood({
        scene: this,
        x: this.input.x,
        y: this.input.y
      }));
    });
    this.input.on("gameout", () => {
      console.log("leaving game");
      this.saveAquarium();
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
  loadAquarium() {
    const saveFile = JSON.parse(localStorage.getItem("saveFile"));
    if (saveFile) {
      console.log("Save file: ");
      console.log(saveFile);
      console.log("Aquarium loaded from save");
      saveFile.creatures.forEach((creature) => {
        this.creatures.add(new Fish2({
          scene: this,
          x: creature.x,
          y: creature.y,
          name: creature.name,
          key: "fish_red"
        }));
      });
    } else {
      this.creatures.add(new Fish2({
        scene: this,
        x: 0,
        y: 0,
        key: "fish_red",
        lifespan: 360,
        name: "test1"
      }));
      this.creatures.add(new Fish2({
        scene: this,
        x: 0,
        y: 0,
        key: "fish_red",
        lifespan: 360,
        name: "test2"
      }));
      this.creatures.add(new Fish2({
        scene: this,
        x: 0,
        y: 0,
        key: "fish_red",
        lifespan: 360,
        name: "test3"
      }));
      this.creatures.add(new Fish2({
        scene: this,
        x: 0,
        y: 0,
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
  }
  saveAquarium() {
    let saveState = {
      creatures: this.creatures.getChildren()
    };
    localStorage.setItem("saveFile", JSON.stringify(saveState));
    console.log("Game Saved");
    console.log(JSON.stringify(saveState));
  }
}
