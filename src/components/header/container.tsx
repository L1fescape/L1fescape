import * as React from 'react'
import { Header as HeaderCompoent, PublicProps as ComponentPublicProps } from './component'

export interface PublicProps {
  hideTitle?: boolean
  fixed?: boolean
}

export const Header: React.StatelessComponent<PublicProps> = (props: PublicProps) => {
  return (
    <HeaderCompoent
      toggleFlyoutMenu={() => {}}
      hideTitle={props.hideTitle}
      fixed={props.fixed}
      />
  )
}