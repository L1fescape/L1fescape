import * as React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/router';
import { SocialIcons } from 'ak.gg/components/social';
import './styles.scss'

export const Footer = () => (
  <div className="footer">
    <div className="interwebs">
      <h3>Find Andrew on the Internet</h3>
      <SocialIcons names />
    </div>
    <div>
      <p>© 2019 <Link to={Routes.Home}>Andrew Kennedy</Link></p>
    </div>
  </div>
)