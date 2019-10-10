import { useEffect } from 'react'

const defaultTitle = 'ak.gg'

export function useTitleEffect(title?: string) {
  useEffect(() => {
    document.title = title ? `${defaultTitle} / ${title}` : defaultTitle
  })
}