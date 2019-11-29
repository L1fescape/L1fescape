import * as React from 'react'
import { Route as RouteComponent, RouteProps } from 'react-router'
import { Home, Music, Code, Talks, Blog, FourOhFour } from 'ak.gg/pages'
import { Posts } from 'ak.gg/pages/blog/content'

interface Route extends RouteProps {
  text: string
  path: string
}

export const Routes: { [key: string]: Route } = {
  Home: {
    component: Home,
    text: 'ak.gg',
    exact: true,
    path: '/',
  },
  Music: {
    component: Music,
    text: 'music',
    path: '/music',
  },
  Code: {
    component: Code,
    text: 'code',
    path: '/code',
  },
  Talks: {
    component: Talks,
    text: 'talks',
    path: '/talks',
  },
  Blog: {
    component: Blog,
    text: 'blog',
    path: '/blog',
  },
}

export const NavRoutes: Route[] = [
  Routes.Music,
  Routes.Code,
  // Routes.Talks,
  Routes.Blog,
]

export const routes = [
  ...Object.keys(Routes).map(key => {
    const route = Routes[key]
    return (
      <RouteComponent
        key={key}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    )
  }),
  ...Posts.map(post => (
    <RouteComponent key={post.pathname} path={post.pathname} component={Blog} />
  )),
  <RouteComponent key="404" component={FourOhFour} />,
]
