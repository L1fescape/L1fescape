import * as React from 'react'
import * as cn from 'classnames'
import { Header, Footer } from 'ak.gg/components/page'
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
  const { className, title, noHeader, noFooter, fixedHeader, hideHomeLink, children } = props
  useTitleEffect(title)
  return (
    <div className={cn('page', className)}>
      { noHeader ? null : <Header fixed={fixedHeader} hideHomeLink={hideHomeLink} /> }
      <div className="content">
        {children}
      </div>
      { noFooter ? null : <Footer /> }
    </div>
  )
}