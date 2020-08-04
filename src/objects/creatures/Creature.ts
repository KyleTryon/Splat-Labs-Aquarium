import "phaser"
/**
 * Create a new creature
 * @class
 */
export default abstract class Creature extends Phaser.GameObjects.Sprite {
	_body: Phaser.Physics.Arcade.Body
	/** Genetics */
	lifespan: number
	desiredDepth: number
	/** Stats */
	name: string
	age: number = 0
	hunger: number = 1
	health: number = 1
	speed: number = 10
	energy: number
	
	fear: number = 0
	/** Action */
	direction: number = 90
	target: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0,0)

	public constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame)
		this.name = params.name
		this.lifespan = params.lifespan
		this.energy = 1000
	}

	protected getPrecisionVariableOffset(): number {
		return Phaser.Math.Between(-100, 100)
	}

}
