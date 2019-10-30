import * as React from 'react'
import { useState } from 'react'
import * as History from 'history'
import { Router as ReactRouter, Route, RouteProps, Switch } from 'react-router'
import { Home, Music, Code, Talks, Blog, FourOhFour } from 'ak.gg/pages'
import { Header, HeaderContext } from 'ak.gg/components'

export type RouterHistory = History.History<any>

export interface AppProps {
  history: RouterHistory
}

export enum Routes {
  Home = '/',
  Music = '/music',
  Code = '/code',
  Talks = '/talks',
  Blog = '/blog',
}

export const NavRoutes: Routes[] = [
  Routes.Music,
  Routes.Code,
  // Routes.Talks,
  Routes.Blog,
]

interface Page extends RouteProps {
  text: string
  path: Routes
}

export const Pages: Page[] = [
  { component: Home, text: 'ak.gg', path: Routes.Home, exact: true },
  { component: Music, text: 'music', path: Routes.Music },
  { component: Code, text: 'code', path: Routes.Code },
  { component: Talks, text: 'talks', path: Routes.Talks },
  { component: Blog, text: 'blog', path: Routes.Blog },
]
export const RouteToPageMap = new Map<Routes, Page>(
  Pages.map(page => [page.path, page])
)

export const App = (props: AppProps) => {
  const [headerFixed, setHeaderFixed] = useState(false)
  const [hideHomeLink, setHeaderHomeLinkVisible] = useState(true)
  const [noHeader, setHeaderHidden] = useState(false)

  return (
    <HeaderContext.Provider
      value={{ setHeaderFixed, setHeaderHomeLinkVisible, setHeaderHidden }}
    >
      <ReactRouter history={props.history}>
        {noHeader ? null : (
          <Header hideHomeLink={hideHomeLink} fixed={headerFixed} />
        )}
        <Switch>
          {Pages.map(page => (
            <Route
              key={page.path}
              exact={page.exact}
              path={page.path}
              component={page.component}
            />
          ))}
          <Route component={FourOhFour} />
        </Switch>
      </ReactRouter>
    </HeaderContext.Provider>
  )
}
