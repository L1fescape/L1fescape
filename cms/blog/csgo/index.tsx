import * as React from 'react'
import { Expand, SubNav, SubNavSection } from 'ak.gg/components'
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
        <h3>Config</h3>
        <h5>autoexec.cfg</h5>
        <Expand>
          <ReactMarkdown source={require('./autoexec.md')} />
        </Expand>
      </section>
      <section id={SectionIDs.DedicatedServer}>
        <ReactMarkdown source={require('./dedicated-server.md')} />
      </section>
    </>
  )
}
