import * as React from 'react'
import { Link } from 'react-router-dom'
import { Post, groupPosts } from 'ak.gg/utils/posts'
import { BLOG_ROOT } from 'ak.gg/constants'
import './styles.scss'

export interface PublicProps {
  posts: Post[] 
  groupPosts?: boolean
  first?: number
  showLink?: boolean
}

const PostSummary = (props: {post: Post}) => (
  <div key={props.post.path} className="post-summary">
    <span className="date">{`${props.post.date}`}</span>
    <Link to={props.post.path}>{props.post.title}</Link>
  </div>
)

export class PostList extends React.Component<PublicProps> {
  public render() {
    let { groupPosts, first, posts, showLink } = this.props
    const isTruncated = typeof first !== 'undefined' && first < posts.length
    showLink = typeof showLink !== 'undefined' ? showLink : isTruncated
    posts = posts.slice(0, typeof first !== "undefined" ? first : posts.length)

    return (
      <>
        { groupPosts ? this.getGroupedPostsList(posts) : this.getPostsList(posts) }
        { showLink && <Link to={BLOG_ROOT}>↪ all posts</Link> }
      </>
    )
  }

  private getPostsList(posts: Post[]) {
    return (
      <>
        { posts.map(post => <PostSummary key={post.path} post={post} />) }
      </>
    )
  }

  private getGroupedPostsList(posts: Post[]) {
    const groupedPosts = groupPosts(posts)
    const postYears: string[] = Object.keys(groupedPosts).sort((a, b) => +b - +a)
    return (
      <>
        {postYears.map(year => (
          <div key={year} className="year">
            <h3>{year}</h3>
            {groupedPosts[year].map(post => <PostSummary key={post.path} post={post} />)}
          </div>
        ))}
      </>
    )
  }
}