import { useEffect } from 'react'

const defaultTitle = 'L1fescape.com'

export function useTitleEffect(title?: string) {
  useEffect(() => {
    document.title = title ? `${defaultTitle} / ${title}` : defaultTitle
  })
}
