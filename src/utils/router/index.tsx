import * as React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import { RouterHistory } from 'ak/utils'
import { PageRoots, Home, Music, FourOhFour } from 'ak/pages'

export interface PublicProps {
  history: RouterHistory
}

export const Router: React.FC<PublicProps> = props => (
  <ReactRouter history={props.history}>
    <Switch>
      <Route exact path={PageRoots.Home} component={Home} />
      <Route path={PageRoots.Music} component={Music} />
      <Route component={FourOhFour} />
    </Switch>
    {props.children}
  </ReactRouter>
)

export function withRouter<P>(Component: React.ComponentType<P>, history: RouterHistory) {
  return (props: P) => {
    return (
      <Router history={history}>
        <Component {...props} />
      </Router>
    )
  }
} 