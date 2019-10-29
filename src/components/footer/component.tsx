import * as React from 'react'
import { Link, Socials } from 'ak.gg/components'
import './styles.scss'

function getURLFromSource(filename: string) {
  const projectRoot = 'https://github.com/l1fescape/ak.gg'
  const branchPath = '/tree/master/'
  const url = `${projectRoot}${branchPath}${filename}`
  return url
}

interface FooterProps {
  pageSource?: string
}

export const Footer = (props: FooterProps) => (
  <div className="footer">
    <div className="interwebs">
      <h4>Find me on the Internet</h4>
      <Socials />
    </div>
    <p className="love">Made with ♥ in SF</p>
    {props.pageSource && (
      <p className="source">
        <Link
          title={'View Page Source'}
          url={getURLFromSource(props.pageSource)}
        >
          View Source
        </Link>
      </p>
    )}
  </div>
)
