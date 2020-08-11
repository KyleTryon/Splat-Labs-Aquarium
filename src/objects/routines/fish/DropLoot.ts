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
  priority: number
  private _lastDropTime: number
  private _minDropWait: number

  constructor(params: params) {
    this.fish = params.fish
    this._minDropWait = 8000 // 5 seconds
    this._lastDropTime = Date.now() + this._minDropWait
    this.priority = 0
  }

  calcPriority(): void {
    if (Date.now() > (this._lastDropTime)) {
      this.reset()
      let rand = Math.random()
      if (rand > 0.85) {
        this.priority = 1
      } else {
        this.priority = 0
      }
    } else {
      this.priority = 0
    }
  }

  reset(): void {
    this._lastDropTime = (Date.now() + this._minDropWait)
  }

  execute(): void {
    this.reset()
    this.fish.scene.coins.add(new dropCoin({fish: this.fish}))
  }

}