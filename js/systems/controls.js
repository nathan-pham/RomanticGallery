import { 
	OrbitControls 
} from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js'

const createControls = (camera, canvas) => {
	const controls = new OrbitControls(camera, canvas)

	controls.enableDamping = true

	controls.tick = () => controls.update()

	return controls
}

export default createControls