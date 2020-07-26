import { Fish } from "../objects/creatures/Fish"
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
      x: 100,
      y: 100,
      key: "fish_red",
      lifespan: 360,
      name: "test"
    })
  }

}