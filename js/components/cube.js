import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'https://unpkg.com/three/build/three.module.js'

const createCube = () => {
  const geometry = new BoxBufferGeometry(2, 2, 2)
  const material = new MeshBasicMaterial()
  const cube = new Mesh(geometry, material)

	return cube
}

export default createCube