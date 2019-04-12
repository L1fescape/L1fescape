import { useEffect } from 'react'

export function useTitleEffect(title?: string) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  })
}