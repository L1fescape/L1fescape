import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  SocialMedia,
  Links,
  Projects,
  Page,
  BlogRoll,
  Woulg,
} from 'ak.gg/components'
import './styles.scss'

const Banner = () => (
  <Woulg className="hi">
    <section>
      <div className="intro">
        <p>
          <strong>Andrew Kennedy</strong> is a software engineer and musician
          based in San Francisco, CA
        </p>
      </div>
      <SocialMedia hideTitle />
    </section>
  </Woulg>
)

export const Home: React.FC<RouteComponentProps> = () => (
  <Page banner={<Banner />}>
    <section className="about">
      <h2>Hello! 👋</h2>
      <h3>Quick Intro</h3>
      <p>
        {`I'm Andrew and I like writing music, skateboarding, and making things
        with code. During the day I'm a Software Engineer at `}
        <Links.SauceLabs />. At night I work on{' '}
        <Links.GitHub>open source projects</Links.GitHub> and{' '}
        <Links.SoundCloud>make beats</Links.SoundCloud>.
      </p>
    </section>
    <section className="home-projects">
      <h2>Projects</h2>
      <Projects limit={2} />
    </section>
    <section className="blog">
      <h2>
        Latest from the <Links.blog />
      </h2>
      <BlogRoll />
    </section>
  </Page>
)
