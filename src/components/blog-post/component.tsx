import * as React from 'react'
import { Page } from 'ak.gg/components/page'
import { PostFooter } from 'ak.gg/components/blog-post-footer'

export interface BlogPostProps {
  title: string
  content: string
  url: string
}

export const BlogPost: React.FC<BlogPostProps> = props => (
  <Page title={`blog / ${props.title}`}>
    {props.content}
    <PostFooter title={props.title} url={props.url} />
  </Page>
)
