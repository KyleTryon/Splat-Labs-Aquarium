export class BootScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics
  private progressBar: Phaser.GameObjects.Graphics

  constructor() {
    super({
      key: "BootScene"
    })
  }

  preload(): void {
    console.log("Loading boot sequence")
    this.cameras.main.setBackgroundColor(0x98d687)
    this.createLoadingbar()
    this.load.on(
      "progress",
      function(value: number) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1)
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        )
      },
      this
    )
    this.load.on(
      "complete",
      function() {
        this.progressBar.destroy()
        this.loadingBar.destroy()
        console.log("Loading complete")
      },
      this
    )

    this.load.pack(
      "preload",
      "assets/pack.json",
      "preload"
    )
  }

  update(): void {
    this.scene.start("AquariumScene");
  }

  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics()
    this.loadingBar.fillStyle(0x5dae47, 1)
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics()
  }
  
}