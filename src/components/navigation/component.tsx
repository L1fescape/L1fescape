import * as React from 'react'
import { HashLink } from 'react-router-hash-link'
import * as cn from 'classnames'
import { Links } from 'ak.gg/components'
import './navigation.scss'

interface NavigationProps {
  className?: string
  console?: boolean
}

type Props = NavigationProps

export const Navigation: React.FC<Props> = ({ console, className }) => (
  <div className={cn('navigation', className, console && 'console')}>
    <Links.home />
    <Links.cs />
    <Links.code />
    <Links.blog />
  </div>
)

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
