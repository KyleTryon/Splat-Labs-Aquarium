import"../../../web_modules/phaser.js";export default class o extends Phaser.GameObjects.Sprite{constructor(s,e,t,i,d){super(s,e,t,i,d);this.scene.add.existing(this),this.scene.physics.add.existing(this),this._body=this.body,this._body.collideWorldBounds=!0}}
