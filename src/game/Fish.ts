import Creature from './Creature'
export class Fish extends Creature {
  public constructor(params) {
    super(params)
    this.setScale(3)
    this.setOrigin(0, 0)
    console.log("Fish generated")
  }
  update(): void {
  }
}