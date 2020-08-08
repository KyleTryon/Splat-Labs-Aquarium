import { IRoutines } from "../IRoutines"
import Fish from '../../creatures/Fish'
import dropCoin from '../../consumables/dropCoin'

interface params {
  fish: Fish
}

/**
 * Behavior: Randomly swim in tank. Managed by a RoutineManager.
 * @class
 */
export default class DropLoot implements IRoutines {
  name: string = "DropLoot"
  fish: Fish
  private _lastDropTime: number
  private _minDropWait: number

  constructor(params: params) {
    this.fish = params.fish
    this._lastDropTime = Date.now() + 6000
    this._minDropWait = 15000 // 5 seconds
  }

  getPriority(): number {
    if (Date.now() > (this._lastDropTime)) {
      let rand = Math.random()
      if (rand > 0.9) {
        return 5
      } else {
        // this.reset()
        return 0
      }
    } else {
      return 0
    }
  }

  reset() {
    console.log("resetting")
    this._lastDropTime = (Date.now() + this._minDropWait)
  }

  execute(): void {
    this.reset()
    this.fish.scene.coins.add(new dropCoin({fish: this.fish}))
  }

}