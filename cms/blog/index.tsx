import * as React from 'react'
import * as path from 'path'
import * as ReactMarkdown from 'react-markdown'
import { CSGO } from './csgo'

export enum Tag {
  Code = 'code',
  Testing = 'testing',
}

export interface Post {
  path: string
  redirects?: string[]
  title: string
  content: React.ReactElement
  pageSource: string
  date: Date
  updated?: Date
  tags?: Tag[]
  banner?: JSX.Element
}

export const PostsMap: { [key: string]: Post } = {
  crossPlatformTesting: {
    title: 'Cross Platform Automation Testing',
    path: '/blog/cross-platform-testing',
    date: new Date('December 11 2019'),
    pageSource: path.join(__dirname, './sauce-labs.md'),
    content: <ReactMarkdown source={require('./sauce-labs.md')} />,
    tags: [Tag.Code],
  },
  csgo: {
    title: 'Counter Strike: Global Offensive',
    path: '/blog/csgo',
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
}

export const Posts: Post[] = Object.keys(PostsMap).map(key => PostsMap[key])
