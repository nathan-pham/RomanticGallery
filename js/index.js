import World from './world.js'

const init = () => {
	const root = document.getElementById('root')
	
	const world = new World(root)
	world.start()

	const loader = document.getElementById('loader')
	loader.style.opacity = 0;
	loader.ontransitionend = () => {
		loader.remove()
	}
}

window.onload = init

