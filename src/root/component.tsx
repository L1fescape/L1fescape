import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from '../components/header'
import { Home } from '../pages/home'
import { About } from '../pages/about'
import './styles.scss'

export interface Props {}

export const Root: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  )
}
