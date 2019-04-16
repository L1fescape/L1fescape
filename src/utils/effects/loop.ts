import { useEffect } from 'react'

export function useLoopEffect(callback: () => void) {
  let running: boolean = false 
  const loop = () => {
    if (running) {
      callback()
      requestAnimationFrame(loop)
    }
  }
  useEffect(() => {
    running = true
    requestAnimationFrame(loop)
    return () => {
      running = false
    }
  })
}

