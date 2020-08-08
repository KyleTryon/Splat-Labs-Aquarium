import dropCoin2 from "../../consumables/dropCoin.js";
export default class DropLoot {
  constructor(params) {
    this.name = "DropLoot";
    this.fish = params.fish;
    this._lastDropTime = Date.now() + 6000;
    this._minDropWait = 15000;
  }
  getPriority() {
    if (Date.now() > this._lastDropTime) {
      let rand = Math.random();
      if (rand > 0.9) {
        return 5;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  reset() {
    console.log("resetting");
    this._lastDropTime = Date.now() + this._minDropWait;
  }
  execute() {
    this.reset();
    this.fish.scene.coins.add(new dropCoin2({
      fish: this.fish
    }));
  }
}
