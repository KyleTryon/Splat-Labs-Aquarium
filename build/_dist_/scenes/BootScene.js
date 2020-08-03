export class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }
  preload() {
    console.log("Loading boot sequence");
    this.cameras.main.setBackgroundColor(10016391);
    this.createLoadingbar();
    this.load.on("progress", function(value) {
      this.progressBar.clear();
      this.progressBar.fillStyle(16774867, 1);
      this.progressBar.fillRect(this.cameras.main.width / 4, this.cameras.main.height / 2 - 16, this.cameras.main.width / 2 * value, 16);
    }, this);
    this.load.on("complete", function() {
      this.progressBar.destroy();
      this.loadingBar.destroy();
      console.log("Loading complete");
    }, this);
    this.load.pack("preload", "assets/pack.json", "preload");
  }
  update() {
    this.scene.start("AquariumScene");
  }
  createLoadingbar() {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(6139463, 1);
    this.loadingBar.fillRect(this.cameras.main.width / 4 - 2, this.cameras.main.height / 2 - 18, this.cameras.main.width / 2 + 4, 20);
    this.progressBar = this.add.graphics();
  }
}
