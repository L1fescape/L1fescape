import { DrawFn } from './loop'

export interface LineOptions {
  lineCount: number
  colors: string[]
}

export function createLines(count: number, colors: string[]): DrawFn[] {
  const initLine = () => { 
    let x = 0
    let dir = 1
    let speed = Math.random() * 2
    let colorIndex = Math.floor(Math.random() * colors.length)
    let initialized = false

    const drawLine = (ctx: CanvasRenderingContext2D, height: number, width: number) => {
      if (!initialized) {
        x = Math.random() * width
        dir = Math.random() > 0.5 ? 1 : -1
        initialized = true
      }

      ctx.beginPath()
      ctx.moveTo(x - 60, 0)
      ctx.lineTo(40 + x, height)
      ctx.strokeStyle = colors[colorIndex]
      ctx.lineWidth = speed
      ctx.stroke()

      x += dir * speed
      if (x >= width || x <= 0) {
        x = Math.min(x, width)
        x = Math.max(x, 0)
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
