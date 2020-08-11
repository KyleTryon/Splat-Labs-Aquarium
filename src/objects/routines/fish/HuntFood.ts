import { IRoutines } from "../IRoutines"
import Fish from '../../creatures/Fish'
import FishFood from '../../consumables/fishFood'

interface params {
  fish: Fish

}

export default class HuntFood implements IRoutines {
  name: string = "HuntFood"
  fish: Fish
  private _availableFood: Phaser.GameObjects.Group
  priority: number

  constructor(params: params) {
    this.fish = params.fish
    this.priority = 0
  }

  calcPriority(): void {
    this._availableFood = this.fish.scene.fishFood
    if  (this._availableFood.getLength() > 0) {
      this.priority = 0.99
    } else {
      this.priority = 0
  }
    
  }
  execute(): void {
    this._availableFood = this.fish.scene.fishFood
    // set target to closest food item.
    if  (this._availableFood.getLength() > 0) {
      let closestFood = this._availableFood.getChildren().sort((itema: FishFood, itemb: FishFood) => {
        let distA = Phaser.Math.Distance.Between(this.fish.x, this.fish.y, itema.x, itema.y)
        let distB = Phaser.Math.Distance.Between(this.fish.x, this.fish.y, itemb.x, itemb.y)
        if (distA > distB) {
          return 1
        } else if (distA == distB) {
          return 0
        } else {
          return -1
        }
      })
      let distToFood = Phaser.Math.Distance.Between(this.fish.x, this.fish.y,(closestFood[0] as FishFood).x, (closestFood[0] as FishFood).y)
      if (distToFood < 10) {
        let energyFromFood = (closestFood[0] as FishFood).foodValue
        this._availableFood.remove(closestFood[0], true)
        this.fish.energy += energyFromFood
      } else {
        let foodVelocity = (closestFood[0] as FishFood)._body.velocity
        let newTarget = new Phaser.Math.Vector2(((closestFood[0] as FishFood).x + (foodVelocity.x * this.fish._deltaTime)), ((closestFood[0] as FishFood).y) +(foodVelocity.y * this.fish._deltaTime))
        this.fish.target = newTarget
        this.fish.swimToTarget(20,2)
      }
    }
  }

}