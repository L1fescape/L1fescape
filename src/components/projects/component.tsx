import * as React from 'react'
import { ProjectsList } from 'cms.ak.gg/code'
import { CodeSectionIDs } from 'ak.gg/pages'
import { routes } from 'ak.gg/routes'
import { HashLink } from 'react-router-hash-link'
import './styles.scss'

export interface ProjectsProps {
  limit?: number
}

export const Projects: React.FC<ProjectsProps> = props => {
  let projects = ProjectsList
  let showMore = false
  if (props.limit !== undefined && props.limit < projects.length) {
    projects = projects.slice(0, props.limit)
    showMore = true
  }
  return (
    <>
      <div key="projects" className="projects">
        {projects.map(({ name, description, content, Component }) => (
          <div className="project" key={name}>
            <h3>{name}</h3>
            {description && <h5>{description}</h5>}
            {content && content}
            {Component && <Component />}
          </div>
        ))}
      </div>
      {showMore && (
        <HashLink
          key="show-more"
          to={`${routes.code}#${CodeSectionIDs.Projects}`}
        >
          See More
        </HashLink>
      )}
    </>
  )
}
