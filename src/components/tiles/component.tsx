import * as React from 'react'
import { useSpring, animated as a } from 'react-spring'

export const Tiles: React.FC = ({ children }) => {
  const props = useSpring({
    from: {
      left: '0%',
      top: '0%',
      width: '0%',
      height: '0%',
      background: 'lightgreen',
    },
    to: async (next: any) => {
      while (1) {
        await next({
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%',
          background: 'lightblue',
        })
        await next({ height: '50%', background: 'lightgreen' })
        await next({
          width: '50%',
          left: '50%',
          background: 'lightgoldenrodyellow',
        })
        await next({ top: '0%', height: '100%', background: 'lightpink' })
        await next({ top: '50%', height: '50%', background: 'lightsalmon' })
        await next({ width: '100%', left: '0%', background: 'lightcoral' })
        await next({ width: '50%', background: 'lightseagreen' })
        await next({ top: '0%', height: '100%', background: 'lightskyblue' })
        await next({ width: '100%', background: 'lightslategrey' })
      }
    },
  })
  return (
    <div className="project">
      <a.div className="script-box" style={props}>
        {children}
      </a.div>
    </div>
  )
}
