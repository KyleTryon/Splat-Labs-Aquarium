import "/web_modules/phaser.js";
import {AquariumScene as AquariumScene2} from "./scenes/AquariumScene.js";
import {BootScene as BootScene2} from "./scenes/BootScene.js";
export class Game extends Phaser.Game {
  constructor(config2) {
    super(config2);
  }
}
export const config = {
  title: "Splat Labs Aquarium",
  version: "1.0",
  width: "100%",
  height: "80vh",
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene2, AquariumScene2],
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
      gravity: {
        y: 7
      }
    }
  },
  backgroundColor: "#000000",
  render: {
    pixelArt: false,
    antialias: true
  }
};
window.addEventListener("load", () => {
  var game = new Game(config);
  console.log("Game Created");
});
window.onresize = function() {
  location.reload();
};
