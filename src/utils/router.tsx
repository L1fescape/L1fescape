import * as React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router'
import { RouterHistory } from 'ak.gg/utils'
import { Home, Projects, Blog, FourOhFour } from 'ak.gg/pages'

export interface PublicProps {
  history: RouterHistory
}

interface Page {
  component: () => JSX.Element,
  text: string,
  path: string,
}

export const Pages: { [key: string]: Page } = {
  home: { component: Home, text: 'ak.gg', path: '/', },
  projects: { component: Projects, text: 'projects', path: '/projects', },
  blog: { component: Blog, text: 'blog', path: '/blog', },
}

export const Router: React.FC<PublicProps> = props => (
  <ReactRouter history={props.history}>
  {props.children || (
    <Switch>
      { Object.keys(Pages).map(name => {
        const page = Pages[name]
        return (
          <Route
            key={name}
            path={page.path}
            component={page.component}
          />
        )
      })}
      <Route component={FourOhFour} />
    </Switch>
  )}
  </ReactRouter>
)

export function withRouter<P>(Component: React.ComponentType<P>, history: RouterHistory): React.FC<P> {
  return (props: P) => {
    return (
      <Router history={history}>
        <Component {...props} />
      </Router>
    )
  }
} 