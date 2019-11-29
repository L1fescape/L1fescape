import * as React from 'react'
import {
  Page,
  ExternalLink,
  ItalicText,
  getItalicText,
  SubNav,
  SubNavSection,
} from 'ak.gg/components'
import { CopyToClipboard } from 'ak.gg/components/copy-to-clipboard'
import './styles.scss'

enum SectionIDs {
  Italics = 'italic-text-generator',
  Links = 'links',
}

const sections: SubNavSection[] = [
  {
    name: 'Italic Text Generator',
    id: SectionIDs.Italics,
  },
  {
    name: 'Links',
    id: SectionIDs.Links,
  },
]

export const Code = () => {
  const copyRef = React.useRef(null)
  function onCopySuccess() {
    console.log('success')
  }
  return (
    <Page title="code" pageSource={__filename}>
      <SubNav sections={sections} />
      <section id={SectionIDs.Italics}>
        <h2>Italic Text Generator</h2>
        <p>
          Tool for converting normal text into{' '}
          {getItalicText('unicode italic text')}. This is useful for platforms
          that do not support italic styling, such as Instagram and Twitter.
        </p>
        <ItalicText className="italics">
          {(italicText: string) =>
            italicText && (
              <>
                <textarea
                  ref={copyRef}
                  className="italics-result"
                  value={italicText}
                  onChange={() => {}}
                />
                <CopyToClipboard
                  textAreaRef={copyRef}
                  onSuccess={onCopySuccess}
                />
              </>
            )
          }
        </ItalicText>
      </section>
      <section id={SectionIDs.Links}>
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
