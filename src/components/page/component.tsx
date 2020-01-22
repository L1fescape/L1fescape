import * as React from 'react'
import * as cn from 'classnames'
import { Navigation, Love, SocialMedia } from 'ak.gg/components'
import { useTitleEffect } from 'ak.gg/utils/effects'
import './styles.scss'

export interface PageProps {
  className?: string
  title?: string
  pageSource?: string
  banner?: JSX.Element
  headerClassName?: string
}

export const Page: React.FC<PageProps> = ({
  className,
  title,
  children,
  pageSource,
  banner,
}) => {
  useTitleEffect(title)

  return (
    <div className={cn('page', className)}>
      <Navigation />
      {banner && <div className="banner">{banner}</div>}
      <div className="content">{children}</div>
      <SocialMedia />
      <Navigation />
      <Love source={pageSource} />
    </div>
  )
}
