import dropCoin2 from "../../consumables/dropCoin.js";
export default class DropLoot {
  constructor(params) {
    this.name = "DropLoot";
    this.fish = params.fish;
    this._minDropWait = 8000;
    this._lastDropTime = Date.now() + this._minDropWait;
    this.priority = 0;
  }
  calcPriority() {
    if (Date.now() > this._lastDropTime) {
      this.reset();
      let rand = Math.random();
      if (rand > 0.85) {
        this.priority = 1;
      } else {
        this.priority = 0;
      }
    } else {
      this.priority = 0;
    }
  }
  reset() {
    this._lastDropTime = Date.now() + this._minDropWait;
  }
  execute() {
    this.reset();
    this.fish.scene.coins.add(new dropCoin2({
      fish: this.fish
    }));
  }
}
