import { useEffect } from 'react'

export function useWindowResizeEffect(callback: () => void) {
  useEffect(() => {
    window.addEventListener('resize', callback)
    return () => {
      window.removeEventListener('resize', callback)
    }
  })
}