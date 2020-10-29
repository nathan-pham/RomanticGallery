import {
	DirectionalLight
} from 'https://unpkg.com/three/build/three.module.js'

const createLight = () => {
	let light = new DirectionalLight('white', 8)

	light.position.set(10, 10, 10)

	return light
}

export default createLight