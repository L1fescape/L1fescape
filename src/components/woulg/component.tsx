import * as React from 'react'
import { useRef, useState } from 'react'
import { useLoopEffect } from 'ak.gg/utils/effects'
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

export type WoulgWrapperComponent = 'div' | 'span'

export interface WoulgOpts {
  canvasClassName?: string
  contentClassName?: string
  lineCount?: number
  component?: WoulgWrapperComponent
}

export const Woulg: React.FC<WoulgOpts> = (props) => {
  const { canvasClassName, contentClassName, lineCount, children, component } = props 
  const Component = component || 'div'
  const shadowedEl = useRef(null)
  const canvasEl = useRef(null)
  const [ loop ] = useState(() => createLoop({ lineCount: lineCount || 200, colors }))
  useLoopEffect(() => {
    if (canvasEl && shadowedEl) {
      const { offsetHeight: height, offsetWidth: width } = shadowedEl.current
      loop(canvasEl.current, height, width)
    }
  })
  return (
    <>
      <canvas ref={canvasEl} className={cn('woulg', canvasClassName)} />
      <Component ref={shadowedEl} className={cn('woulg-content', contentClassName)}>
        {children}
      </Component>
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