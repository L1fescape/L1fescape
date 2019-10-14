import { useLayoutEffect } from 'react'

export function useLoopEffect(callback: () => void) {
  let running: boolean = false
  const loop = () => {
    if (running) {
      callback()
      requestAnimationFrame(loop)
    }
  }
  useLayoutEffect(() => {
    running = true
    requestAnimationFrame(loop)
    return () => {
      running = false
    }
  }, [])
}
