import * as React from 'react'
import { Header, Footer } from 'ak.gg/components/page'
import { Woulg } from 'ak.gg/components/woulg'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/utils/router'
import { SocialIcons } from 'ak.gg/components/social'
import './styles.scss'
import { useTitleEffect } from 'ak.gg/utils';

export const Home = () => {
  useTitleEffect()
  return (
    <div className="home">
      <Woulg className="hi">
        {/* <Header hideHomeLink /> */}
        <section>
          <div className="intro">
            <p><strong>Andrew Kennedy</strong> is a software engineer and musician based in San Francisco, CA</p>
            <SocialIcons />
          </div>
        </section>
      </Woulg>
      {/* <section className="projects">
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
        <h2>Latest from the <Link to={Routes.Blog}>Blog</Link></h2>
      </section>
      <section className="about">
        <h2>About</h2>
        <p>Andrew likes writing music, skateboarding, and making things with code. During the day he's a Software Engineer at Twitch. At night I work on open source projects and make beats.</p>
      </section>
      <Footer /> */}
    </div>
  )
}