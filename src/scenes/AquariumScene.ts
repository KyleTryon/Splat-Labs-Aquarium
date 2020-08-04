import Fish from "../objects/creatures/Fish"
import Creature from "../objects/creatures/Creature"
import FishFood from "../objects/consumables/fishFood"
export class AquariumScene extends Phaser.Scene {
  private creatures: Phaser.GameObjects.Group
  fishFood: Phaser.GameObjects.Group
  constructor() {
    super({
      key: "AquariumScene"
    })

  }

  preload(): void {
    console.log("Loading Aquarium")
    this.cameras.main.setBackgroundColor(0x8ad3e3)
  }

  create(): void {
    this.creatures = new Phaser.GameObjects.Group(this)
    this.fishFood = new Phaser.GameObjects.Group(this)
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test1"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test2"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test3"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test4"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test4"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test5"
    }))
    this.creatures.add(new Fish({
      scene: this,
      x: 0,
      y: 0,
      key: "fish_red",
      lifespan: 360,
      name: "test6"
    }))

    this.input.on("pointerdown", () => {
      this.fishFood.add (new FishFood({
        scene: this,
        x: this.input.x,
        y: this.input.y
      }))
    })
  }
  update(time: number, delta: number) {
    this.creatures.getChildren().forEach( creature => {
      creature.update(delta)
    })
  }

  public getRandomPoint(): Phaser.Math.Vector2 {
    let screenWidth = this.cameras.main.width
    let screenHeight = this.cameras.main.height
    let x = Math.random() * screenWidth
    let y = Math.random() * screenHeight
    return new Phaser.Math.Vector2(x,y)
  }

}