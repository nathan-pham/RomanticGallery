import {
  Camera,
  Group,
  Scene,
} from 'https://unpkg.com/three/build/three.module.js'

import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js'

const closeLoader = () => {
	const loader = document.getElementById('loader')
	loader.style.opacity = 0;
	loader.ontransitionend = () => {
		loader.remove()
	}
}

const root = document.getElementById('root')