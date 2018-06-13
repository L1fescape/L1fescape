import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { Footer } from 'ak.gg/components/footer'

export interface PublicProps {
  children?: any
}

export const Page: React.StatelessComponent<PublicProps> = (props: PublicProps) => (
  <>
    <Header />
    { props.children }
    <Footer />
  </>
)
