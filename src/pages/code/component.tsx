import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Page,
  ExternalLink,
  SubNav,
  SubNavSection,
  Projects,
  Links,
} from 'l1/components'
import { HashLink } from 'react-router-hash-link'
import { ProjectsList as projects } from 'cms.l1/code'
import './code.scss'

export enum CodeSectionIDs {
  Projects = 'projects',
  Links = 'links',
}

const sections: SubNavSection[] = [
  {
    name: 'Projects',
    id: CodeSectionIDs.Projects,
  },
  {
    name: 'Links',
    id: CodeSectionIDs.Links,
  },
]

const projectSections: SubNavSection[] = projects.map(project => ({
  name: project.name,
  id: project.name,
}))

const Terminal: React.FC = () => (
  <div className="term-container">
    <div className="term">
      <div className="title">
        {/* <div className="button close" />
        <div className="button maximize" /> */}
      </div>
      <div className="text">
        <span className="code">
          <span className="status">~/code</span>
          <br />
          <span className="cursor">$</span>
          {' cat README.md'}
        </span>
        <br />
        <span>
          {`Here's a list of `}
          <HashLink smooth to={`#${CodeSectionIDs.Projects}`}>
            projects
          </HashLink>
          {` I've made with software:`}
        </span>
        <span>
          <SubNav sections={projectSections} />
        </span>
        <br />
        <span>
          {`I also write about software `}
          <Links.blog>on my blog</Links.blog>
          {` and like keeping track of `}
          <HashLink smooth to={`#${CodeSectionIDs.Links}`}>
            interesting links
          </HashLink>
          {'.'}
        </span>
      </div>
    </div>
  </div>
)

export const Code: React.FC<RouteComponentProps> = () => {
  return (
    <Page
      title="code"
      className="code"
      pageSource={__filename}
      banner={<Terminal />}
      subnav={<SubNav sections={sections} />}
    >
      <section id={CodeSectionIDs.Projects} className="code-projects">
        <h2>Projects</h2>
        <Projects />
      </section>
      <section id={CodeSectionIDs.Links}>
        <h2>Content I find Interesting</h2>
        <h4>Typescript</h4>
        <ul>
          <li>
            <ExternalLink to="http://neugierig.org/software/blog/2019/11/interface-pattern.html">
              Typescript interface patterns
            </ExternalLink>
          </li>
        </ul>
        <h4>Video</h4>
        <ul>
          <li>
            <ExternalLink to="https://github.com/leandromoreira/digital_video_introduction#how-does-a-video-codec-work">
              how does a video codec work
            </ExternalLink>
          </li>
        </ul>
      </section>
    </Page>
  )
}
