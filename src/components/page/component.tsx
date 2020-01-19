import * as React from 'react'
import { useEffect } from 'react'
import * as cn from 'classnames'
import { Navigation, Footer } from 'ak.gg/components'
import { useTitleEffect } from 'ak.gg/utils/effects'
import './styles.scss'

export interface PageProps {
  className?: string
  title?: string
  pageSource?: string
  banner?: JSX.Element
  headerClassName?: string
}

export const Page: React.FC<PageProps> = props => {
  const {
    className,
    title,
    children,
    pageSource,
    banner,
  } = props

  useTitleEffect(title)

  return (
    <div className={cn('page', className)}>
      <Navigation />
      <div className="banner">{banner}</div>
      <div className="content">{children}</div>
      <Socials />
      <Navigation />
      <div className="love">
        <p>Made with ♥ in SF</p>
        {props.pageSource && (
          <p>
            <ViewSource source={props.pageSource} />
          </p>
        )}
      </div>
    </div>
  )
}
