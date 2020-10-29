import {
	WebGLRenderer
} from 'https://unpkg.com/three/build/three.module.js'

const createRenderer = () => {
	const renderer = new WebGLRenderer({
		antialias: true
	})

	renderer.physicallyCorrectLights = true

	return renderer
}

export default createRenderer