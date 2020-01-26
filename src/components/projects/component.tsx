import * as React from 'react'
import { ProjectsList } from 'cms.ak.gg/code'
import { CodeSectionIDs } from 'ak.gg/pages'
import { routes } from 'ak.gg/routes'
import { HashLink } from 'react-router-hash-link'
import './projects.scss'

export interface ProjectsProps {
  limit?: number
}

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
