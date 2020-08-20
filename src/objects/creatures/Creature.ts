import "phaser"
/**
 * Create a new creature
 * @class
 */
export default abstract class Creature extends Phaser.GameObjects.Sprite {
	_body: Phaser.Physics.Arcade.Body
	/** Genetics */
	private _initalScale: number = 0.3
	lifespan: number
	desiredDepth: number
	/** Stats */
	name: string
	age: number = 0
	level: number = 1
	private _maxFoodLevel: number
	perceptionDistance: number
	foodLevel: number = 10
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
		// Set initial values
		this.perceptionDistance = (this.scene.cameras.main.width / 1.5)
		// Add Physics
		this.scene.add.existing(this)
		this.scene.physics.add.existing(this)
		// Set Body
		// @ts-ignore
		this._body = this.body
		this._body.collideWorldBounds = true
		// Create
		this.setOrigin(0.5, 0.5)
		this.setScale(this._initalScale)
	}

	protected getPrecisionVariableOffset(): number {
		return Phaser.Math.Between(-100, 100)
	}

}
