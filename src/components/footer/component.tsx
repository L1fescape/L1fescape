import * as React from 'react'
import * as History from 'history'
import * as FontAwesome from 'react-fontawesome'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { PostList } from 'ak.gg/components/post-list'
import { parsedPosts as posts } from 'ak.gg/utils/posts'
import { HomeLink, Navigation } from 'ak.gg/components/navigation'
import { SocialIcons } from 'ak.gg/components/social-icons'
import './styles.scss'

type Props = RouteComponentProps<{
  location: History.Location
}>


export const FooterPresentation: React.StatelessComponent<Props> = (props: Props) => (
  <div className="footer">
    <div>
      <HomeLink />
      <Navigation />
      <SocialIcons showFull={true} />
    </div>
    <div>
      <span className="title">some more cool stuff</span>
      <PostList
        first={5}
        showLink={true}
        posts={posts.filter(post => post.path.indexOf(props.location.pathname) === -1)}
      />
    </div>
    <div className="note">
      <p>If something is broken or you'd like to fix a spelling mistake, feel free to contribute on <a href="https://github.com/L1fescape/ak.gg"><FontAwesome name="github" /> GitHub</a>.</p>
    </div>
  </div>
)

export const Footer = withRouter(props => <FooterPresentation {...props} />)