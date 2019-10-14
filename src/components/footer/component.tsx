import * as React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'ak.gg/router'
import { Socials } from 'ak.gg/components'
import './styles.scss'

export const Footer = () => (
  <div className="footer">
    <div className="interwebs">
      <h4>Find me on the Internet</h4>
      <Socials />
    </div>
    <p className="copyme">
      © 2019 <Link to={Routes.Home}>Andrew Kennedy</Link>
    </p>
  </div>
)
