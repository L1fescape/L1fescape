import { LineOptions, createLines } from './line'
import { drawHud } from './hud'

export type DrawFn = (ctx: CanvasRenderingContext2D, height: number, width: number) => void

export function createLoop(opts: LineOptions) {
  let ctx: CanvasRenderingContext2D = null
  const lines = createLines(opts.lineCount, opts.colors)
  return (canvasEl: HTMLCanvasElement, height: number, width: number) => {
    ctx = canvasEl.getContext('2d')
    canvasEl.height = height 
    canvasEl.width = width
    ctx.clearRect(0, 0, width, height)
    lines.map((drawLine: DrawFn) => drawLine(ctx, height, width))
    drawHud(ctx, height, width)
  }
}
