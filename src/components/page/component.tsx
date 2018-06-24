import * as React from 'react'
import * as History from 'history'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Header } from 'ak.gg/components/header'
import { Footer } from 'ak.gg/components/footer'
import { HOME_ROOT, BLOG_ROOT } from 'ak.gg/constants'
import './styles.scss'

export interface PublicProps {
  children?: any
}

type RouteProps = RouteComponentProps<{
  location: History.Location
}>

type Props = PublicProps & RouteProps

const PagePresentation: React.StatelessComponent<Props> = (props: Props) => {
    const { pathname } = props.location
    const showFooter = [HOME_ROOT, BLOG_ROOT].indexOf(pathname) === -1

    return (
      <>
        <Header />
        <div className="page">
          { props.children }
        </div>
        { showFooter && <Footer /> }
      </>
    )
}

export const Page= withRouter(props => <PagePresentation {...props} />)