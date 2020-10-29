import {
	AmbientLight,
	HemisphereLight,
	DirectionalLight
} from 'https://unpkg.com/three/build/three.module.js'

// new HemisphereLight(sky, ground, intensity)
const createLight = () => {
	const ambient = new AmbientLight('white', 2)
	
	const main = new DirectionalLight('white', 5)
	main.position.set(10, 10, 10)

	return {
		ambient,
		main
	}
}

export default createLight