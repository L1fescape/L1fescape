import * as React from 'react'
import { Header } from 'ak.gg/components/header'
import * as FontAwesome from 'react-fontawesome'
import { PostList } from 'ak.gg/components/post-list'
import { parsedPosts as posts } from 'ak.gg/utils/posts'
import { Circles } from 'ak.gg/pages/art/components/circles';
import { SocialIcons } from 'ak.gg/components/social-icons';

import './styles.scss'

const soundcloudTracks = [
 '243723716',
 '2525803',
]

export const Home: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className="home">
      <div>
        <span className="title">👋</span>
        <div className="content">
          <p>Hey I'm Andrew. I work at Twitch <FontAwesome name="twitch" /> as a frontend developer</p>
          <SocialIcons />
        </div>
      </div>
      <div>
        <span className="title">some things i've written</span>
        <div className="content">
          <PostList showLink={true} posts={posts} />
        </div>
      </div>
      <div>
        <Circles orbitRadius={5} positionRadius={1} numCircles={20} />
      </div>
    </div>
  </>
)
