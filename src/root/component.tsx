import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from '../components/header'
import { Home } from '../pages/home'
import { CirclesPage } from '../pages/circles'
import './styles.scss'

export interface Props {}

export const Root: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/circles" component={CirclesPage} />
      </div>
    </BrowserRouter>
  )
}
