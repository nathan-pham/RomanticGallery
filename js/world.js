import createCamera from './components/camera.js'
import createScene from './components/scene.js'
import createLight from './components/light.js'
import createCube from './components/cube.js'

import createRenderer from './systems/renderer.js'
import Resizer from './systems/resizer.js'
import Loop from './systems/loop.js'

let renderer, camera, scene, loop

class World {
	constructor(container) {
		renderer = createRenderer()
		camera = createCamera()
		scene = createScene()
		loop = new Loop(camera, scene, renderer)
	
		container.append(renderer.domElement)

		const cube = createCube()
		const light = createLight()
		scene.add(cube, light)

		loop.update.push(cube)

		const resizer = new Resizer(container, camera, renderer)
	}
	render() {
		renderer.render(scene, camera)
	}
	start() {
		loop.start()
	}
	stop() {
		loop.stop()
	}
}

export default World