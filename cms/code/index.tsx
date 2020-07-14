import * as React from 'react'
import { Italics } from './italics'
import { ProjectComponent } from 'l1/components/projects'
import { Tiles } from 'l1/components/tiles'

export interface Project {
  name: string
  description?: string
  Component?: React.ElementType
}

export const ProjectsList: Project[] = [
  {
    name: 'Tetris',
  },
  {
    name: 'Italic Text Generator',
    Component: props => (
      <ProjectComponent {...props}>
        <Italics />
      </ProjectComponent>
    ),
  },
  {
    name: 'Life',
    description: 'Magic: The Gathering Life Counter',
  },
  {
    name: 'Tiles',
    Component: props => (
      <Tiles>
        <ProjectComponent className="tiles" {...props} />
      </Tiles>
    ),
  },
]
