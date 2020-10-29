import createCamera from './components/camera.js'
import createScene from './components/scene.js'
import createCube from './components/cube.js'

import createRenderer from './systems/renderer.js'
import Resizer from './systems/resizer.js'

let renderer, camera, scene


class World {
	constructor(container) {
		renderer = createRenderer()
		camera = createCamera()
		scene = createScene()
	
		container.append(renderer.domElement)

		const resizer = new Resizer(container, camera, renderer)

		const cube = createCube()
		scene.add(cube)
	}
	render() {
		renderer.render(scene, camera)
	}
}

export default World