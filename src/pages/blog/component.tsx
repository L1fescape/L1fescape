import * as React from 'react'
import * as History from 'history'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Page } from 'ak.gg/components/page'
import { Post } from 'ak.gg/components/post'
import { PostList } from 'ak.gg/components/post-list'
import { parsedPosts as posts, postReducer } from 'ak.gg/utils/posts'


type Props = RouteComponentProps<{
  location: History.Location
}>

const BlogPresentation: React.StatelessComponent<Props> = (props: Props) => {
  const { pathname } = props.location
  const post = posts.reduce(postReducer, {})[pathname]
  const Layout = post && post.layout || Page
  return (
    <Layout>
      {post ? <Post post={post} /> : (
        <PostList
          posts={posts}
          groupPosts={true}
        />
      )}
    </Layout>
  )
}
export const Blog = withRouter(props => <BlogPresentation {...props} />)