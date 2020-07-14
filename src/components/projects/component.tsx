import * as React from 'react'
import { ProjectsList } from 'cms.l1/code'
import { CodeSectionIDs } from 'l1/pages'
import { routes } from 'l1/routes'
import { HashLink } from 'react-router-hash-link'
import './projects.scss'

export interface ProjectsProps {
  limit?: number
}

export const ProjectComponent: React.FC<{
  name: string
  description: string
  className?: string
}> = ({ name, description, children, className = 'project' }) => (
  <div className={className} id={name}>
    <h3>{name}</h3>
    {description && <h5>{description}</h5>}
    {children}
  </div>
)

export const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  let projects = ProjectsList
  let showMore = false
  if (limit !== undefined && limit < projects.length) {
    projects = projects.slice(0, limit)
    showMore = true
  }
  return (
    <>
      <div key="projects" className="projects">
        {projects.map(({ Component = ProjectComponent, ...props }) => (
          <Component key={props.name} {...props} />
        ))}
      </div>
      {showMore && (
        <HashLink
          key="show-more"
          to={`${routes.code}#${CodeSectionIDs.Projects}`}
        >
          See All Projects
        </HashLink>
      )}
    </>
  )
}
