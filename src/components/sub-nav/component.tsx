import * as React from 'react'
import { HashLink } from 'react-router-hash-link'

export interface SubNavSection {
  name: string
  id: string
}

export interface SubNavProps {
  sections: SubNavSection[]
}

export const SubNav: React.FC<SubNavProps> = props => (
  <ul>
    {props.sections.map(section => (
      <li key={section.id}>
        <HashLink smooth to={`#${section.id}`}>
          {section.name}
        </HashLink>
      </li>
    ))}
  </ul>
)
