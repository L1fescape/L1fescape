import * as React from 'react'
import { useEffect } from 'react'
import * as cn from 'classnames'
import { HeaderContext, Footer } from 'ak.gg/components'
import { useTitleEffect } from 'ak.gg/utils/effects'
import './styles.scss'

export interface PageProps {
  className?: string
  title?: string
  noHeader?: boolean
  noFooter?: boolean
  fixedHeader?: boolean
  hideHomeLink?: boolean
}

export const Page: React.FC<PageProps> = props => {
  const {
    className,
    title,
    noHeader,
    noFooter,
    fixedHeader,
    hideHomeLink,
    children,
  } = props
  const {
    setHeaderFixed,
    setHeaderHomeLinkVisible,
    setHeaderHidden,
  } = React.useContext(HeaderContext)

  useTitleEffect(title)
  useEffect(() => {
    setHeaderHidden(noHeader)
    setHeaderFixed(fixedHeader)
    setHeaderHomeLinkVisible(hideHomeLink)
  }, [props])

  return (
    <div className={cn('page', className)}>
      <div className="content">{children}</div>
      {noFooter ? null : <Footer />}
    </div>
  )
}
