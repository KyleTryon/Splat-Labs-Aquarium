import "phaser"
/**
 * Create a new creature
 * @class
 */
export default abstract class Creature extends Phaser.GameObjects.Sprite {
	_body: Phaser.Physics.Arcade.Body
	private _initalScale: number = 0.3
	/** Genetics */
	lifespan: number
	desiredDepth: number
	/** Stats */
	name: string
	age: number = 0
	level: number = 1
	private _maxFoodLevel: number
	foodLevel: number = 10
	health: number = 1
	speed: number = 10
	energy: number
	/** Action */
	direction: number = 90
	target: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0,0)

	public constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame)
		this.setScale(this._initalScale)
		this.name = params.name
		this.lifespan = params.lifespan
		this.energy = 1000
		// Add Physics
		this.scene.add.existing(this)
		this.scene.physics.add.existing(this)
		// Set Body
		// @ts-ignore
		this._body = this.body
		this._body.collideWorldBounds = true
		// Run vitals
		this.scene.time.addEvent({
			delay: 1000,
			callback: () => {
				this.vitals()
			}
		})
	}

	protected getPrecisionVariableOffset(): number {
		return Phaser.Math.Between(-100, 100)
	}
	// It takes resources to live.
	vitals(): void {
		this.calcLevel()
	}

	calcLevel(): void {
		let scale = this._initalScale * this.level
		this.setScale(scale)
	}

}
