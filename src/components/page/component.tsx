import * as React from 'react'
import { Header } from 'ak/components/header'
import { Footer } from 'ak/components/footer'
import { useTitleEffect } from 'ak/utils/effects'
import './styles.scss'

export interface PublicProps {
  title?: string
}

export const Page: React.FC<PublicProps> = props => {
  useTitleEffect(props.title)
  return (
    <>
      <Header />
      <div className="page">
        {props.children}
      </div>
      <Footer />
    </>
  )
}