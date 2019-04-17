import * as React from 'react'
import * as cn from 'classnames'
import { Header } from 'ak/components/header'
import { Footer } from 'ak/components/footer'
import { useTitleEffect } from 'ak/utils/effects'
import './styles.scss'

export interface PublicProps {
  className?: string
  title?: string
  noHeader?: boolean
  noFooter?: boolean
  fixedHeader?: boolean
  hideHomeLink?: boolean
}

export const Page: React.FC<PublicProps> = props => {
  const { className, title, noHeader, noFooter, fixedHeader, hideHomeLink, children } = props
  useTitleEffect(title)
  return (
    <div className={cn('page', className)}>
      { typeof noHeader !== 'undefined' && noHeader ? null : <Header fixed={fixedHeader} hideHomeLink={hideHomeLink} /> }
      <div className="content">
        {children}
      </div>
      { typeof noFooter !== 'undefined' && noFooter ? null : <Footer /> }
    </div>
  )
}