import { useEffect } from 'react'

const defaultTitle = 'Andrew Kennedy'

export function useTitleEffect(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle
  })
}