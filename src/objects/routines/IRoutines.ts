/**
 * Define a routine class which can influence the activity of a creature. Creatures will execute routines based on the priority value.
 * @Interface
 */
export interface IRoutines {
  /**
   * Name your routine
   */
  name: string
  /**
   * A reference to the game object which is implementing this routine
   */
  fish: Phaser.GameObjects.Sprite
  /**
   * Priority is used to order tasks. A scale of [0-1] is recommended to reflect zero need, to imminent death without satiation.
   */
  getPriority(): number
  /**
   * Invoked when the routine is called.
   */
  execute(): void
}