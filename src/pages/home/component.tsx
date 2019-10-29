import * as React from 'react'
import { Woulg } from 'ak.gg/components/woulg'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/router'
import { Page } from 'ak.gg/components'
import { Socials, Links } from 'ak.gg/components/socials'
import './styles.scss'

export const Home = () => (
  <Page className="home" hideHomeLink pageSource={__filename}>
    <Woulg className="hi">
      <section>
        <div className="intro">
          <p>
            <strong>Andrew Kennedy</strong> is a software engineer and musician
            based in San Francisco, CA
          </p>
          <Socials hideTitle />
        </div>
      </section>
    </Woulg>
    <section className="about">
      <h2>Hello! 👋</h2>
      <h3>Quick Intro</h3>
      <p>
        {`I'm Andrew and I like writing music, skateboarding, and making things
        with code. During the day I'm a Software Engineer at `}
        <Links.SauceLabs />. At night I work on{' '}
        <Links.GitHub>open source projects</Links.GitHub> and make beats.
      </p>
    </section>
    <section className="projects">
      <h2>Projects</h2>
      <div className="content">
        <div className="project">
          <h3>Tetris</h3>
        </div>
        <div className="project">
          <h3>Life</h3>
          <h4>Magic: The Gathering Life Counter</h4>
        </div>
      </div>
    </section>
    <section className="blog">
      <h2>
        Latest from the <Link to={Routes.Blog}>Blog</Link>
      </h2>
    </section>
  </Page>
)
