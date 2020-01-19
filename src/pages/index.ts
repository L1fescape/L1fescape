import { RouteProps } from 'react-router'
import { Blog } from './blog'
import { Code } from './code'
import { CounterStrike } from './cs'
import { Home } from './home'

export * from './blog'
export * from './code'
export * from './cs'
export * from './home'
export * from './404'

export interface Page extends RouteProps {
  text: string
  path: string
}

type ValidPages = 'Home' | 'Code' | 'Blog' | 'CounterStrike'
export const PagesMap: { [key in ValidPages]: Page } = {
  Home: {
    text: 'ak.gg',
    exact: true,
    path: '/',
    component: Home,
  },
  Code: {
    text: 'code',
    path: '/code',
    component: Code,
  },
  Blog: {
    component: Blog,
    text: 'blog',
    path: '/blog',
  },
  CounterStrike: {
    component: CounterStrike,
    text: 'csgo',
    path: '/cs',
  },
}
export const Pages: Page[] = Object.keys(PagesMap).map(key => PagesMap[key as ValidPages])