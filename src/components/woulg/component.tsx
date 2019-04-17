import * as React from 'react'
import { useRef, useState } from 'react'
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

export const Woulg: React.FC<WoulgOpts> = (props) => {
  const { canvasClassName, children } = props 
  const shadowedEl = useRef(null)
  const canvasEl = useRef(null)
  const [ loop ] = useState(() => createLoop({ lineCount: 200, colors }))
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
        {children}
      </div>
    </>
  )
}

export function withWoulg<P>(Component: React.ComponentType<P>, opts: WoulgOpts = {}) {
  return (props: P) => (
    <Woulg {...opts}>
      <Component {...props} />
    </Woulg>
  )
}