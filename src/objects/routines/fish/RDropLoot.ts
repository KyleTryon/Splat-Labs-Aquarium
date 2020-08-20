import Routine from '../Routine'
import dropCoin from '../../consumables/dropCoin'
import IRoutineParameters from '../IRoutineParameters'


/**
 * Behavior: Randomly swim in tank. Managed by a RoutineManager.
 * @class
 */
export default class RDropLoot extends Routine {
  private _lastDropTime: number
  private _minDropWait: number

  constructor(parameters: IRoutineParameters){
    super({
      name: "dropLoot",
      priority: 0,
      fish: parameters.fish
    })
    this._minDropWait = 8000 // 8 seconds
    this._lastDropTime = Date.now() + this._minDropWait
  }

  calcPriority(): void {
    if (Date.now() > (this._lastDropTime)) {
      this.reset()
      let rand = Math.random()
      if (rand > 0.9) {
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