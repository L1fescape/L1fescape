import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Page } from 'ak/components/page'
import { withWoulg, Woulg } from 'ak/components/woulg'
import './styles.scss'

const Bio = () => (
  <p>Andrew Kennedy is a software engineer and musician based in San Francisco, CA</p>
)
const WoulgBio = withWoulg(Bio)
const Intro: React.FC = props => (
  <Page title="hi" className="intro" noFooter hideHomeLink>
    {props.children}
  </Page>
)
const WoulgIntro: React.FC = withWoulg(Intro)
export const Home = () => {
  const [ hover, setHover ] = useState(false)
  const bio = useRef(null)
  useEffect(() => {
    console.log(bio)
    bio.current.addEventListener('mouseover', () => setHover(true))
    bio.current.addEventListener('mouseleave', () => setHover(false))
    return () => {
      bio.current.removeEventListener('mouseover', () => setHover(true))
      bio.current.removeEventListener('mouseleave', () => setHover(false))
    }
  })
  const IntroComponent: React.FC = props => (
    hover
      ? <Intro>{props.children}</Intro>
      : <WoulgIntro>{props.children}</WoulgIntro>
  )
  const BioComponent = hover ? WoulgBio : Bio

  return (
    <>
      <IntroComponent>
        <div ref={bio} className={hover ? "hover": ""}>
          <BioComponent />
        </div>
      </IntroComponent>
      <Page className="posts" noHeader>
        <p>more content</p>
      </Page>
    </>
  )
} 