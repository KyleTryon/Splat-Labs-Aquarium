import Routine from "../Routine"
import FishFood from '../../consumables/fishFood'

import IRoutineParameters from '../IRoutineParameters'

export default class HuntFood extends Routine {
  private _availableFood: Phaser.GameObjects.Group
  priority: number

  constructor(parameters: IRoutineParameters) {
    super({
      name: "hunt",
      priority: 0.1,
      fish: parameters.fish
    })
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
      if (distToFood < (this.fish.width / 2)) {
        this.eatFood((closestFood[0] as FishFood))
      } else if (distToFood < this.fish.perceptionDistance) {
        let foodVelocity = (closestFood[0] as FishFood)._body.velocity
        let newTarget = new Phaser.Math.Vector2(((closestFood[0] as FishFood).x + (foodVelocity.x * this.fish._deltaTime)), ((closestFood[0] as FishFood).y) +(foodVelocity.y * this.fish._deltaTime))
        this.fish.target = newTarget
        this.fish.swimToTarget(20,2)
      }
    }
  }

  eatFood(food: FishFood): void {
    this._availableFood.remove(food, true)
    this.fish.energy += food.foodValue
  }

}