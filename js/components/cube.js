import { 
	BoxBufferGeometry, 
	Mesh, 
	MeshStandardMaterial,
	TextureLoader
} from 'https://unpkg.com/three/build/three.module.js'

const createMaterial = () => {
	const textureLoader = new TextureLoader()

	const texture = textureLoader.load(
		'/assets/harshbricks-albedo.png'
	)

	// const material = new MeshStandardMaterial({
	// 	color: '#f5cb5c'
	// })

	const material = new MeshStandardMaterial({
		map: texture
	})

	return material
}

const createCube = () => {
  const geometry = new BoxBufferGeometry(2, 2, 2)
	const material = createMaterial()
  const cube = new Mesh(geometry, material)

	cube.rotation.set(-0.5, -0.1, 0.8)

	const radPerSec = 30 * Math.PI / 180

	cube.tick = (delta) => {
		cube.rotation.z += radPerSec * delta
		cube.rotation.x += radPerSec * delta
		cube.rotation.y += radPerSec * delta
	}

	return cube
}

export default createCube