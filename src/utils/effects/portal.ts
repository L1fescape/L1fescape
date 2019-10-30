import * as React from 'react'
import { useLayoutEffect } from 'react'

export function usePortal(id: string) {
  const rootElemRef = React.useRef(document.createElement('div'))

  useLayoutEffect(() => {
    const parentElem = document.querySelector(`#${id}`)
    parentElem.appendChild(rootElemRef.current)
    return () => rootElemRef.current.remove()
  }, [])

  return rootElemRef.current
}
