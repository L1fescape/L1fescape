import * as React from 'react'
import * as History from 'history'
import { Redirect, Router, Route, Switch } from 'react-router'
import { Home, Code, Blog, CounterStrike, FourOhFour } from 'ak.gg/pages'
import { routes } from 'ak.gg/routes'

export type RouterHistory = History.History<any>

export interface AppProps {
  history: RouterHistory
}

export const App: React.FC<AppProps> = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path={routes.home} render={Home} />
      <Route path={routes.blog} render={Blog} />
      <Route path={routes.code} render={Code} />
      <Route path={routes.cs} render={CounterStrike} />
      <Redirect exact from="/csgo" to="/cs" />
      <Route render={FourOhFour} />
    </Switch>
  </Router>
)
