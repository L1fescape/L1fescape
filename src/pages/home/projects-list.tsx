import * as React from 'react'

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
    name: 'Life',
    description: 'Magic: The Gathering Life Counter',
    content: 'hello',
  },
  {
    name: 'Conrify',
    description: 'Unicorns, rainbows, and sparkles, oh my!',
    content: 'hello',
  },
  {
    name: 'Key',
    description: 'a mini midi keyboard',
    content: 'hello',
  },
]
