import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  SocialMediaIcons,
  Links,
  Projects,
  Page,
  BlogRoll,
  Woulg,
} from 'l1/components'
import './home.scss'

export const About: React.FC = () => (
  <section>
    <h2>Hello! 👋</h2>
    <p>I'm Andrew.</p>
    <p>
      {`I like 🎸 making music, 👨🏼‍💻 writing software,
      🎮 playing video games, and 🛹 skateboarding.
      During the day I'm a Software Engineer at `}
      <Links.SauceLabs icon />. At night I work on{' '}
      <Links.GitHub icon>open source projects</Links.GitHub> and{' '}
      <Links.SoundCloud icon>make beats</Links.SoundCloud>.
    </p>
    {/* <p>
      {'I post on this website about '}
      <Links.code>software projects</Links.code>
      {' and the game '}
      <Links.cs />
      {'. I also write '}
      <Links.blog>blog posts</Links.blog>
      {" about different things I'm interested in."}
    </p> */}
    <p>You can find me elsewhere on the internet:</p>
    <p className="social-media">
      <SocialMediaIcons />
    </p>
  </section>
)

export const Home: React.FC<RouteComponentProps> = () => (
  <Page className="home">
    <Woulg className="hi">
      <About />
    </Woulg>
    {/* <section className="home-code">
      <h2>Code</h2>
      <Projects limit={5} />
    </section>
    <section>
      <h2>
        Latest from the <Links.blog />
      </h2>
      <BlogRoll limit={1} />
    </section> */}
  </Page>
)
