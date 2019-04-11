import * as React from 'react'
import { Header } from 'ak/components/header'
import './styles.scss'

export const Page: React.FC = props => (
  <>
    <Header />
    <div className="page">
      {props.children}
    </div>
  </>
)