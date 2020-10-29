import {
	WebGLRenderer
} from 'https://unpkg.com/three/build/three.module.js'

const createRenderer = () => {
	const renderer = new WebGLRenderer()

	render.physicallyCorrectLights = true

	return renderer
}

export default createRenderer