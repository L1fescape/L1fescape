import * as React from 'react'
import { HashLink } from 'react-router-hash-link'
import * as cn from 'classnames'
import { Links } from 'l1/components'
import './navigation.scss'

interface NavigationProps {
  className?: string
  console?: boolean
  subnav?: JSX.Element
}

type Props = NavigationProps

export const Navigation: React.FC<Props> = ({ console, className, subnav }) => (
  <div className={cn('navigation', className, console && 'console')}>
    <span>
      <Links.home />
    </span>
    <div className="menu">
      <span>
        <Links.cs />
      </span>
      <span>
        <Links.code />
      </span>
      <span>
        <Links.blog />
      </span>
      {/* {subnav} */}
    </div>
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
