import * as React from 'react'
import { Post as PostModel } from 'ak.gg/utils/posts'
import './styles.scss'

export interface Props {
  post: PostModel
}

export const Post = (props: Props) => (
  <div className="post">
    <h1>{props.post.title}</h1>
    <span className="date">{`${props.post.date}`}</span>
    <div className="body" dangerouslySetInnerHTML={{ __html: props.post.content }} />
  </div>
)
