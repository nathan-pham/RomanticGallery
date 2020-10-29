import createCamera from './components/camera.js'
import createScene from './components/scene.js'
import createGroup from './components/group.js'
import createLight from './components/light.js'

// import createCube from './components/cube.js'

import createRenderer from './systems/renderer.js'
import createControls from './systems/controls.js'
import Resizer from './systems/resizer.js'
import Loop from './systems/loop.js'

let renderer, camera, scene
let loop

class World {
	constructor(container) {
		renderer = createRenderer()
		camera = createCamera()
		scene = createScene()
		loop = new Loop(camera, scene, renderer)

		container.append(renderer.domElement)

		const controls = createControls(camera, renderer.domElement)

		// controls.addEventListener('change', () => {
		// 	this.render()
		// })

		// const cube = createCube()
		const group = createGroup()
		const {
			ambient,
			main
		} = createLight()
		scene.add(main, ambient, group)

		// loop.update.push(cube)
		loop.update.push(controls)
		loop.update.push(group)
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