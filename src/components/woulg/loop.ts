import { LineOptions, createLines } from './line'

export type DrawFn = (
  canvasEl: HTMLCanvasElement,
  height: number,
  width: number
) => void

export function createLoop(opts: LineOptions): DrawFn {
  let ctx: CanvasRenderingContext2D = null
  const lines = createLines(opts.lineCount, opts.colors)
  return (canvasEl: HTMLCanvasElement, height: number, width: number) => {
    ctx = canvasEl.getContext('2d')
    ctx.scale(opts.pixelRatio, opts.pixelRatio)
    canvasEl.height = height
    canvasEl.width = width
    ctx.clearRect(0, 0, width, height)
    lines.map((drawLine: DrawFn) => drawLine(canvasEl, height, width))
  }
}
