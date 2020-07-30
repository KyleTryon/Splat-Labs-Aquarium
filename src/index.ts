import "phaser"

import {AquariumScene} from "./scenes/AquariumScene"
import {BootScene} from "./scenes/BootScene"

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

export const config: Phaser.Types.Core.GameConfig = {
  title: 'Splat Labs Aquarium',
  version: "1.0",
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, AquariumScene],
  input: {
    keyboard: false,
    mouse: true,
    touch: false,
    gamepad: false
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {y: 5},
    }
  },
  backgroundColor: "#000000",
  render: { pixelArt: false, antialias: true }
}


window.addEventListener("load", () => {
  var game = new Game(config)
  console.log("Game Created")
})