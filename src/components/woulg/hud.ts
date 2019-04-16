export function drawHud(ctx: CanvasRenderingContext2D, height: number, width: number) {
  ctx.save()
  ctx.globalAlpha = 0.75
  ctx.strokeStyle = '#262625'

  ctx.beginPath()
  ctx.moveTo(5, 5)
  ctx.lineTo(90, 10)
  ctx.lineTo(40, 55)
  ctx.lineTo(10, 55)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(width - 5, 15)
  ctx.lineTo(width - 130, 10)
  ctx.lineTo(width - 100, 55)
  ctx.lineTo(width - 5, 40)
  ctx.fill()

  ctx.restore()
}