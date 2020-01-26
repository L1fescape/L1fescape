import * as React from 'react'
import { useState } from 'react'
import * as cn from 'classnames'
import './expand.scss'

export interface ExpandProps {
  className?: string
}

interface ExpandState {
  expanded: boolean
}

export const Expand: React.FC<ExpandProps> = props => {
  const [expanded, setExpanded] = useState(false)
  const { className, children } = props

  const styles = { height: '12rem', overflow: 'hidden' }
  if (expanded) {
    styles.height = 'auto'
    styles.overflow = 'auto'
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setExpanded(!expanded)
  }

  const buttonText = expanded ? 'Collapse' : 'Expand'

  return (
    <>
      <div className={cn('expand', className)} style={styles}>
        {!expanded && (
          <div className="expand-overlay">
            <button onClick={handleClick}>{buttonText}</button>
          </div>
        )}
        {children}
      </div>
    </>
  )
}
