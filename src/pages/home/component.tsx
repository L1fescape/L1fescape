import * as React from 'react'
import { Woulg } from 'ak.gg/components/woulg'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/routes'
import { Page } from 'ak.gg/components'
import { Socials, Links } from 'ak.gg/components/socials'
import { BlogRoll } from 'ak.gg/components/blog-roll'
import { ProjectsList } from './projects-list'
import './styles.scss'

const HomeBanner = () => (
  <Woulg className="hi">
    <section>
      <div className="intro">
        <p>
          <strong>Andrew Kennedy</strong> is a software engineer and musician
          based in San Francisco, CA
        </p>
      </div>
      <Socials hideTitle />
    </section>
  </Woulg>
)

export const Home = () => (
  <Page
    className="home"
    headerClassName="home-header"
    pageSource={__filename}
    banner={<HomeBanner />}
  >
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
    <section className="projects">
      <h2>Projects</h2>
      <div className="content">
        {ProjectsList.map(({ name, description, content, Component }) => (
          <div className="project" key={name}>
            <h3>{name}</h3>
            {description && <h5>{description}</h5>}
            {content && content}
            {Component && <Component />}
          </div>
        ))}
      </div>
    </section>
    <section className="blog">
      <h2>
        Latest from the <Link to={Routes.Blog.path}>Blog</Link>
      </h2>
      <BlogRoll />
    </section>
  </Page>
)
