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

export interface State {
  speed: number
  t: number
}

function percentageToHsl(percentage, hue0, hue1) {
  var hue = (percentage * (hue1 - hue0)) + hue0;
  return 'hsl(' + hue + ', 100%, 50%)';
}

export class Circles extends React.Component<Props, State> {
  private elem: HTMLElement | null
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private dimensions: CanvasDimensions
  public state = {
    speed: 0.1,
    t: 0
  }

  private initScene = () => {
    const scene = new THREE.Scene()
    this.dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.camera = new THREE.PerspectiveCamera(100, this.dimensions.width / this.dimensions.height, 0.1, 1000)
    this.camera.position.z = 20
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.setSize(this.dimensions.width, this.dimensions.height)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    const { numCircles, positionRadius, orbitRadius } = this.props

    const circles = times(numCircles, (i) => (
      new THREE.Mesh(
        new THREE.CircleBufferGeometry(1, 32),
        new THREE.MeshBasicMaterial({ color: percentageToHsl(i/numCircles, 255, 140) })
      )
    ))
    circles.forEach(circle => scene.add(circle))

    this.onResize()
    const render = () => {
      circles.forEach((circle, i) => {
        const { t, speed } = this.state
        const circleAng = (2 * Math.PI * i) / numCircles 
        const xPhaseOffset = orbitRadius * (1 - Math.cos(t * (i+1) / numCircles))
        const yPhaseOffset = orbitRadius * Math.sin(t * (i+1) / numCircles)
        circle.position.x = positionRadius * Math.cos(circleAng) + xPhaseOffset
        circle.position.y = positionRadius * Math.sin(circleAng) + yPhaseOffset
        circle.material = new THREE.MeshBasicMaterial({
          color: percentageToHsl(((1 + Math.sin(t/numCircles)) / 2) * (i / numCircles), 255, 140)
        })
      })

      this.setState((state: State, props: Props) => {
        this.renderer.render(scene, this.camera)
        requestAnimationFrame(render)
        return {
          t: state.t + state.speed
        }
      })
    }
    render()
  }

  componentDidMount() {
    this.initScene()
    this.elem && this.elem.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    this.elem && this.elem.removeChild(this.renderer.domElement)
    window.removeEventListener('resize', this.onResize)
  }

  private onResize = () => {
    if (this.elem) {
      this.dimensions = {
        height: this.elem.clientHeight,
        width: this.elem.clientWidth,
      }
      this.camera.aspect = this.dimensions.width / this.dimensions.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize( this.dimensions.width, this.dimensions.height )
    }
  }

  render() {
    return (
      <div className="circles">
        <div ref={el => this.elem = el} />
      </div>
    )
  }
}