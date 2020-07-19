export class Vector2 {
  // Properties
  public x: number
  public y: number

  public magnitude(): number {
    return this.Magnitude(this)
  }

  /**
   * An approximate reimplementation of Unity's Vector 2 class in Typescript
   * @param x X component of the vector.
   * @param y Y component of the vector.
    */
  constructor( x: number, y: number) {
    this.x = x
    this.y = y
  }

  private DotProduct(v1: Vector2, v2: Vector2): number {
    return (v1[0] * v2[0]) + (v1[1] * v2[1])
  }

  /**
  * Returns true if the given vector is exactly equal to this vector.
  */
  public Magnitude(vector: Vector2): number {
    return Math.sqrt(vector.x^2 + vector.y^2)
  }

  /**
  * Returns the length of this vector (Read Only).
  */
  public Equals(vector: Vector2): boolean {
    return ( this == vector ? true : false)
  }

  /**
  * Returns the angle in degrees between from and to.
  */
  public Angle(from: Vector2, to: Vector2): number {
    const numerator = this.DotProduct(from,to)
    const denominator = (this.Magnitude(from))
    return Math.acos(numerator/denominator)
  }

}