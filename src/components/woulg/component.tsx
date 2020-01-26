import * as React from 'react'
import * as cn from 'classnames'
import { useRef, useState } from 'react'
import { useLoopEffect } from 'ak.gg/utils/effects'
import { createLoop } from './loop'
import './woulg.scss'

const colors = [
  // '#FF6B53',
  // '#9F6A58',
  // '#565F51',
  // '#194A2F',
  // '#05290E',
  '#c6e5df',
  '#ff5c50',
  '#5190d9',
  '#ffcf5a',
  '#ffffff',
]

export type WoulgWrapperComponent = 'div' | 'span'

export interface WoulgOpts {
  canvasClassName?: string
  className?: string
  lineCount?: number
  component?: WoulgWrapperComponent
  pixelRatio?: number
}

export const Woulg: React.FC<WoulgOpts> = props => {
  const {
    canvasClassName,
    className: contentClassName,
    component,
    lineCount,
    pixelRatio = window.devicePixelRatio,
  } = props
  const Component = component || 'div'
  const [loop] = useState(() =>
    createLoop({ lineCount: lineCount || 20, colors, pixelRatio })
  )
  const shadowedEl = useRef(null)
  const canvasEl = useRef(null)
  useLoopEffect(() => {
    if (canvasEl && shadowedEl) {
      const { offsetHeight: height, offsetWidth: width } = shadowedEl.current
      loop(canvasEl.current, height, width)
    }
  })
  return (
    <>
      <canvas ref={canvasEl} className={cn('woulg', canvasClassName)} />
      <Component
        ref={shadowedEl}
        className={cn('woulg-content', contentClassName)}
      >
        {props.children}
      </Component>
    </>
  )
}

export function withWoulg<P>(
  Component: React.ComponentType<P>,
  opts: WoulgOpts = {}
) {
  return (props: P) => (
    <Woulg {...opts}>
      <Component {...props} />
    </Woulg>
  )
}
