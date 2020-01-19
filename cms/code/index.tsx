import * as React from 'react'
import { Italics } from './italics'

export interface Project {
  name: string
  description?: string
  content?: string
  Component?: React.ElementType
}

export const ProjectsList: Project[] = [
  {
    name: 'Tetris',
    Component: () => <p>play tetris</p>,
  },
  {
    name: 'Italic Text Generator',
    Component: () => <Italics />,
  },
  {
    name: 'Life',
    description: 'Magic: The Gathering Life Counter',
    content: 'hello',
  },
  {
    name: 'Cornify',
    description: 'Unicorns, rainbows, and sparkles, oh my!',
    content: 'hello',
  },
]
