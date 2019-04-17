import * as React from 'react'
import { useRef } from 'react'
import { useLoopEffect } from 'ak/utils/effects'
import { createLoop } from './loop'
import './styles.scss'
import * as cn from 'classnames'

const colors = [ 
  '#FF6B53',
  '#9F6A58',
  '#565F51',
  '#194A2F',
  '#05290E',
]

export interface WoulgOpts {
  canvasClassName?: string
}

export function withWoulg<P>(Component: React.ComponentType<P>, opts: WoulgOpts = {}) {
  const { canvasClassName } = opts
  // config woulg
  const loop = createLoop({ lineCount: 200, colors, })
  return (props: P) => {
    const shadowedEl = useRef(null)
    const canvasEl = useRef(null)
    // start it
    useLoopEffect(() => {
      if (canvasEl && shadowedEl) {
        const { offsetHeight: height, offsetWidth: width } = shadowedEl.current
        loop(canvasEl.current, height, width)
      }
    })
    return (
      <>
        <canvas ref={canvasEl} className={cn('woulg', canvasClassName)} />
        <div ref={shadowedEl} className="woulg-content">
          <Component {...props} />
        </div>
      </>
    )
  }
}