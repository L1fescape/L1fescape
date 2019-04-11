import * as React from 'react'
import { Link } from 'react-router-dom'
import { PageRoots } from 'ak/pages'

export const Home = () => (
  <>
    <Link to={PageRoots.Music}>mooosic</Link>
    <p>home</p>
  </>
)