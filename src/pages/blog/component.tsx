import * as React from 'react'
import { ContentList, Page } from 'ak.gg/components'
import { BlogPost, Banner } from 'ak.gg/components/blog-post'
import { RouteComponentProps } from 'react-router'
import { Posts } from 'cms.ak.gg'
import './styles.scss'

type Props = RouteComponentProps<{
  postID: string
}>

export const Blog: React.FC<Props> = ({ location: { pathname } }) => {
  const post = Posts.find(post => post.path === pathname)
  const content = post ? <BlogPost post={post} /> : <ContentList />

  return (
    <Page
      title={`blog${post && ` - ${post.title}`}`}
      pageSource={post ? post.pageSource : __filename}
      banner={post && <Banner post={post} />}
    >
      {content}
    </Page>
  )
}
