import "https://kyletryon.github.io/Splat-Labs-Aquarium/web_modules/phaser.js";
export default class Creature extends Phaser.GameObjects.Sprite {
  constructor(params) {
    super(params.scene, params.x, params.y, params.key, params.frame);
    this.age = 0;
    this.hunger = 1;
    this.health = 1;
    this.speed = 10;
    this.fear = 0;
    this.direction = 90;
    this.target = new Phaser.Math.Vector2(0, 0);
    this.name = params.name;
    this.lifespan = params.lifespan;
    this.energy = 1000;
  }
}
