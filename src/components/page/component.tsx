import * as React from 'react'
import { useEffect } from 'react'
import * as cn from 'classnames'
import { HeaderContext, Footer } from 'ak.gg/components'
import { useTitleEffect } from 'ak.gg/utils/effects'
import './styles.scss'

export interface PageProps {
  className?: string
  title?: string
  noFooter?: boolean
  pageSource?: string
  banner?: JSX.Element
  headerClassName?: string
}

export const Page: React.FC<PageProps> = props => {
  const {
    className,
    title,
    noFooter,
    children,
    pageSource,
    banner,
    headerClassName,
  } = props

  const { setClassName: setHeaderClassName } = React.useContext(HeaderContext)

  useTitleEffect(title)
  useEffect(() => {
    setHeaderClassName(headerClassName)
  }, [props])

  return (
    <div className={cn('page', className)}>
      <div className="banner">{banner}</div>
      <div className="content">{children}</div>
      {noFooter ? null : <Footer pageSource={pageSource} />}
    </div>
  )
}
