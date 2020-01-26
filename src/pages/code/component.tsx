import * as React from 'react'
import {
  Page,
  ExternalLink,
  SubNav,
  SubNavSection,
  Projects,
} from 'ak.gg/components'
import { RouteComponentProps } from 'react-router'
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

export const Code: React.FC<RouteComponentProps> = () => {
  return (
    <Page title="code" className="code" pageSource={__filename}>
      <SubNav sections={sections} />
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
