import { Color, Scene } from 'https://unpkg.com/three/build/three.module.js'

const createScene = () => {
	const scene = new Scene()
	scene.background = new Color('#242423')
	return scene
}

export default createScene