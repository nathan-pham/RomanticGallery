const resize = (container, camera, renderer) => {
	camera.aspect = container.clientWidth / container.clientHeight
	camera.updateProjectionMatrix()
	
	renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

class Resizer {
  constructor(container, camera, renderer) {
    resize(container, camera, renderer)

		window.addEventListener('resize', () => {
			resize(container, camera, renderer)

			// this.onResize()
		})
  }
	// onResize() {}
}


export default Resizer