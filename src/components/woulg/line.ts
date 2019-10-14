import { DrawFn } from './loop'

export interface LineOptions {
  lineCount: number
  colors: string[]
  pixelRatio: number
}

export function createLines(count: number, colors: string[]): DrawFn[] {
  const initLine = () => {
    let x = 0
    let dir = 1
    let speed = Math.random() * 2
    let colorIndex = Math.floor(Math.random() * colors.length)
    let initialized = false
    const angle = Math.random() * 20

    const drawLine = (
      canvasEl: HTMLCanvasElement,
      height: number,
      width: number
    ) => {
      const ctx = canvasEl.getContext('2d')
      if (!initialized) {
        x = Math.random() * width
        dir = Math.random() > 0.5 ? 1 : -1
        initialized = true
      }

      const base =
        (height * Math.sin((angle * Math.PI) / 180)) /
        Math.sin(((90 - angle) * Math.PI) / 180)
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x + base, height)
      ctx.strokeStyle = colors[colorIndex]
      ctx.lineWidth = 2 + speed * 2
      ctx.stroke()

      x += dir * speed
      if (x >= width + base || x <= 0 - base) {
        x = Math.min(x, width + base)
        x = Math.max(x, 0 - base)
        dir = dir * -1
        colorIndex++
        if (colorIndex >= colors.length) {
          colorIndex = 0
        }
      }
    }

    return drawLine
  }

  const lines: DrawFn[] = new Array(count)
  for (let i = 0; i < count; i++) {
    lines.push(initLine())
  }
  return lines
}
