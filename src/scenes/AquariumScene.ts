import { Fish } from "../game/Fish"
import { config } from ".."
export class AquariumScene extends Phaser.Scene {
  private fish: Fish
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
    this.fish = new Fish({
      scene: this,
      x: "50%",
      y: "50%",
      key: "fish_red",
      lifespan: 360,
      name: "test"
    })
  }

}