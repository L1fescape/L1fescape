import * as React from 'react'
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
}

export const Page: React.FC<PublicProps> = props => {
  const { className, title, noHeader, noFooter, fixedHeader, children } = props
  useTitleEffect(title)
  return (
    <div className={`page ${typeof className !== 'undefined' ? className : ''}`}>
      { typeof noHeader !== 'undefined' && noHeader ? null : <Header fixed={fixedHeader} /> }
      <div className="content">
        {children}
      </div>
      { typeof noFooter !== 'undefined' && noFooter ? null : <Footer /> }
    </div>
  )
}