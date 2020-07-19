import Engine from "../engine/engine"
import { Vector2 } from "../engine/types"

class Creature {
	//** Genetics */
	lifespan: number
	//** Stats */
	age: number = 0
	hunger: number = 0
	health: number = 1
	speed: number
	buoyancy: number = 0.5
	energy: number = 1
	fear: number = 0
	//** Action */
	direction: Vector2 = new Vector2(0,0)
	target: Vector2 = new Vector2(0,0)

	constructor(speed: number, lifespan: number) {
		this.speed = speed
		this.lifespan = lifespan
	}

}
