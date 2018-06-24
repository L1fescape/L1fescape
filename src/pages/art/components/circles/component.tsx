import * as React from 'react'
import * as THREE from 'three'
import * as GIF from 'gl-gif'
import { times } from 'lodash'

interface CanvasDimensions {
  width: number
  height: number
}

export interface Props {
  numCircles: number
  orbitRadius: number
  positionRadius: number
}

interface Scene {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
}

export interface State {
  scene: Scene | null
  circles: THREE.Mesh[]
  speed: number
  t: number
}

function createNewScene(width: number, height: number): Scene {
  const scene = new THREE.Scene()
  const dimensions = { width, height }
  const camera = new THREE.PerspectiveCamera(100, dimensions.width / dimensions.height, 0.1, 1000)
  camera.position.z = 20
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setClearColor(0x000000, 0.0)
  renderer.setSize(dimensions.width, dimensions.height)
  renderer.setPixelRatio(window.devicePixelRatio)
  return { scene, camera, renderer }
}

const createCircle = (color: string) => (
  new THREE.Mesh(
    new THREE.CircleBufferGeometry(1, 32),
    new THREE.MeshBasicMaterial({ color })
  )
)

const percentToHsl = (percentage, hue0, hue1): string => {
  var hue = (percentage * (hue1 - hue0)) + hue0
  return 'hsl(' + hue + ', 100%, 50%)'
}

export class Circles extends React.Component<Props, State> {
  private elem: HTMLElement | null = null
  public state: State = {
    scene: null,
    circles: [],
    speed: 0.1,
    t: 0,
  }

  componentWillReceiveProps(props: Props) {
    const { numCircles } = props
    const { scene, circles } = this.state
    // todo: remove this check - don't require scene be initialized
    if (!scene) {
      return
    }
    const difCircles = numCircles - circles.length
    let newCircles: THREE.Mesh[] = []
    if (difCircles > 0) {
      newCircles = times(difCircles, (i) => createCircle(percentToHsl(i/numCircles, 255, 140) ))
      newCircles.forEach(circle => scene.scene.add(circle))
      newCircles = circles.concat(newCircles)
    } else {
      const circlesToRemove: THREE.Mesh[] = circles.slice(numCircles, circles.length)
      circlesToRemove.forEach(circle => scene.scene.remove(circle))
      newCircles = circles.slice(0, numCircles)
    }
    this.setState({ circles: newCircles })
  }

  private loop = () => {
    const { numCircles, positionRadius, orbitRadius } = this.props
    const { scene, circles } = this.state
    // todo: remove this check - don't require scene be initialized
    if (!scene || !this.elem) {
      return
    }
    circles.forEach((circle, i) => {
      const { t, speed } = this.state
      const offset = Math.abs(circles.length / 2 - i)
      const circleAng = (2 * Math.PI * i) / numCircles 
      const xPhaseOffset = orbitRadius * (1 - Math.cos(t * (offset+1) / numCircles))
      const yPhaseOffset = orbitRadius * Math.sin(t * (offset+1) / numCircles)
      circle.position.x = positionRadius * Math.cos(circleAng) + xPhaseOffset
      circle.position.y = positionRadius * Math.sin(circleAng) + yPhaseOffset
      circle.material = new THREE.MeshBasicMaterial({
        color: percentToHsl(((1 + Math.sin(t/numCircles)) / 2) * (offset / numCircles), 255, 140)
      })
    })

    this.setState((state: State, props: Props) => {
      scene.renderer.render(scene.scene, scene.camera)
      requestAnimationFrame(this.loop)
      return {
        t: state.t + state.speed
      }
    })
  }

  componentDidMount() {
    const { numCircles } = this.props
    const elem = this.elem
    if (!elem) {
      return
    }

    const scene = createNewScene(elem.offsetWidth, elem.offsetHeight)
    const circles = times(numCircles, (i) => createCircle(percentToHsl(i/numCircles, 255, 140) ))
    circles.forEach(circle => scene && scene.scene.add(circle))
    this.setState({ scene, circles }, () => {
      this.onResize()
      elem.appendChild(scene.renderer.domElement)
      window.addEventListener('resize', this.onResize)
      this.loop()
    })
  }

  componentWillUnmount() {
    const { scene } = this.state
    window.removeEventListener('resize', this.onResize)
    this.elem && this.state.scene && this.elem.removeChild(this.state.scene.renderer.domElement)
  }

  private onResize = () => {
    const { scene } = this.state
    if (!scene || !this.elem) {
      return
    }
    const dimensions = {
      height: this.elem.offsetHeight,
      width: this.elem.offsetWidth,
    }
    scene.camera.aspect = dimensions.width / dimensions.height
    scene.camera.updateProjectionMatrix()
    scene.renderer.setSize(dimensions.width, dimensions.height)
  }

  render() {
    return (
      <div className="circles" ref={el => this.elem = el} />
    )
  }
}