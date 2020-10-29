import { PerspectiveCamera } from 'https://unpkg.com/three/build/three.module.js'

const createCamera = () => {
	const camera = new PerspectiveCamera(
		35,
		1,
		0.1,
		100
	)

	camera.position.set(0, 0, 10)

	return camera
}

export default createCamera