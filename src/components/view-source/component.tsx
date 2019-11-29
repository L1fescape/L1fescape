import * as React from 'react'
import { ExternalLink } from 'ak.gg/components'

export function getURLFromSource(filename: string, commit: string = 'master') {
  const projectRoot = 'https://github.com/l1fescape/ak.gg'
  const url = `${projectRoot}/tree/${commit}/${filename}`
  return url
}

interface SourceProps {
  source: string
  commit?: string
}

export const ViewSource: React.FC<SourceProps> = props => (
  <ExternalLink
    title={'View Page Source'}
    to={getURLFromSource(props.source, props.commit)}
  >
    {props.children || 'View Source'}
  </ExternalLink>
)
