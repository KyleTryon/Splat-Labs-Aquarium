export var gl: WebGLRenderingContext
export class WebGLUtility {

	/**
	 * Initialize WebGL using the provided canvasID if supplied. Will create a new canvas otherwise.
	 * @param elementID HTML element ID of canvas element
	 */
	public static initialize(elementID?: string): HTMLCanvasElement {
			let canvas: HTMLCanvasElement
		if ( elementID !== undefined) {
			canvas = document.getElementById(elementID) as HTMLCanvasElement
			if(canvas === undefined) {
				throw new Error("No canvas element with supplied ID found: " + elementID)
			}
		} else {
			canvas = document.createElement("canvas") as HTMLCanvasElement
			document.body.appendChild(canvas)
		}
		gl = canvas.getContext("webgl")!
		if ( gl === undefined || gl === null ) {
			throw new Error("Unable to initialize WebGL!")
		}
		return canvas
	}
}
