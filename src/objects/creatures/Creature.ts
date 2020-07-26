import "phaser"
/**
 * Create a new creature
 * @class
 */
export default abstract class Creature extends Phaser.GameObjects.Sprite {
	/** Genetics */
	lifespan: number
	/** Stats */
	name: string
	age: number = 0
	hunger: number = 0
	health: number = 1
	speed: number = 0
	buoyancy: number = 0.5
	energy: number = 1
	fear: number = 0
	/** Action */
	direction: number = 90
	target: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0,0)

	public constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame)
		this.name = params.name
		this.lifespan = params.lifespan
	}

}
