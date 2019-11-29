import * as React from 'react'
import { SubNav, SubNavSection } from 'ak.gg/components'
import * as ReactMarkdown from 'react-markdown'

enum SectionIDs {
  Config = 'config',
  DedicatedServer = 'dedicated-server',
}

const sections: SubNavSection[] = [
  {
    name: 'Config',
    id: SectionIDs.Config,
  },
  {
    name: 'Dedicated Server',
    id: SectionIDs.DedicatedServer,
  },
]

export const CSGO = () => {
  return (
    <>
      <SubNav sections={sections} />
      <section id={SectionIDs.Config}>
        <ReactMarkdown source={require('./config.md')} />
      </section>
      <section id={SectionIDs.DedicatedServer}>
        <ReactMarkdown source={require('./dedicated-server.md')} />
      </section>
    </>
  )
}
