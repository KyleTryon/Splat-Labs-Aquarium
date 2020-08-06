import Fish from "../objects/creatures/Fish"
import FishFood from "../objects/consumables/fishFood"

interface IsaveFile {
    creatures: Object[]
}

export class AquariumScene extends Phaser.Scene {

  private creatures: Phaser.GameObjects.Group
  public  fishFood: Phaser.GameObjects.Group

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
    this.loadAquarium()
    this.input.on("gameout", () => {
     console.log("leaving game")
     this.saveAquarium()
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

  public loadAquarium(): void {
    const saveFile: IsaveFile = JSON.parse(localStorage.getItem('saveFile'))
    if (saveFile) {
      console.log("Save file: ")
      console.log(saveFile)
      console.log("Aquarium loaded from save")

      saveFile.creatures.forEach(creature => {
        this.creatures.add(new Fish({
          scene: this,
          x: (creature as Fish).x,
          y: (creature as Fish).y,
          name: (creature as Fish).name,
          key: "fish_red"
        }))
      })
    } else {
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
     
      this.input.on("pointerdown", () => {
        this.fishFood.add (new FishFood({
          scene: this,
          x: this.input.x,
          y: this.input.y
        }))
      })
    }
  }
  public saveAquarium(): void {
    let saveState: IsaveFile = {
      creatures: this.creatures.getChildren()
    }
    localStorage.setItem('saveFile',JSON.stringify(saveState))
    console.log("Game Saved")
    console.log(JSON.stringify(saveState))
  }
}