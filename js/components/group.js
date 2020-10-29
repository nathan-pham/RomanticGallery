import {
	SphereBufferGeometry,
	MeshStandardMaterial,
	MathUtils,
	Group,
	Mesh
} from 'https://unpkg.com/three/build/three.module.js'

//f5cb5c


const createGroup = () => {
	const group = new Group()

	const geometry = new SphereBufferGeometry(0.25, 16, 16)
	const material = new MeshStandardMaterial({
		color: '#f5cb5c'
	})
	const sphere = new Mesh(geometry, material)

	group.add(sphere)

	for(let i = 0 ; i < 1; i += 0.05) {
		const clone = sphere.clone()
	
		let x = Math.cos(2 * Math.PI * i)
		let y = Math.sin(2 * Math.PI * i)

		sphere.position.x = x
		sphere.position.y = y
		sphere.position.z = -i * 5

		group.add(clone)
	}

	group.scale.multiplyScalar(2)

	const radPerSec = 30 * Math.PI / 180

	group.tick = (delta) => {
		group.rotation.z -= delta * radPerSec
	}

	return group
}

export default createGroup