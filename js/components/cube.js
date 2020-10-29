import { 
	BoxBufferGeometry, 
	Mesh, 
	MeshStandardMaterial
} from 'https://unpkg.com/three/build/three.module.js'



const createCube = () => {
  const geometry = new BoxBufferGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({
		color: '#f5cb5c'
	})
  const cube = new Mesh(geometry, material)

	cube.rotation.set(-0.5, -0.1, 0.8)

	const radPerSec = 30 * 180 / Math.PI

	cube.tick = (delta) => {
		cube.rotation.z += radPerSec * delta
		cube.rotation.x += radPerSec * delta
		cube.rotation.y += radPerSec * delta
	}

	return cube
}

export default createCube