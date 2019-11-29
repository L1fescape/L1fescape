import * as React from 'react'
import * as path from 'path'
import * as ReactMarkdown from 'react-markdown'
import { CSGO } from './csgo'

export enum Tag {
  Code = 'code',
  Testing = 'testing',
}

export interface Post {
  pathname: string
  redirects?: string[]
  title: string
  content: React.ReactElement
  pageSource: string
  date: Date
  updated?: Date
  tags?: Tag[]
  banner?: JSX.Element
}

export const Posts: Post[] = [
  {
    pathname: '/blog/sauce-labs',
    title: 'Continuous Testing with Sauce Labs',
    date: new Date('November 26 2019'),
    pageSource: path.join(__dirname, './sauce-labs.md'),
    content: <ReactMarkdown source={require('./sauce-labs.md')} />,
    tags: [Tag.Code],
  },
  {
    pathname: '/blog/i18n',
    redirects: ['/blog/accessibility'],
    title: 'Accessibility Testing',
    date: new Date('November 26 2019'),
    pageSource: path.join(__dirname, './accessibility.md'),
    content: <ReactMarkdown source={require('./accessibility.md')} />,
    tags: [Tag.Code, Tag.Testing],
  },
  {
    pathname: '/csgo',
    title: 'Counter Strike: Global Offensive',
    date: new Date('November 26 2019'),
    updated: new Date('November 28 2019'),
    pageSource: path.join(__dirname, 'csgo'),
    content: <CSGO />,
    banner: (
      <img
        width="100%"
        src="http://media.steampowered.com/apps/csgo/blog/images/wallpaper_nologo.jpg"
      />
    ),
  },
]
