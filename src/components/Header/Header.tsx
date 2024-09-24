import React from 'react'
import './Header.scss'

import { ReactComponent as Logo } from '../../assets/img/tp-logo.svg'
import { ReactComponent as GithubLogo } from '../../assets/img/github-logo.svg'
import { ReactComponent as LinkedInLogo } from '../../assets/img/linkedin-logo.svg'
import { ReactComponent as ResumeLogo } from '../../assets/img/cv-logo.svg'

function Header() {
  return (
    <div className="header">
      <Logo width="48" height="48" />

      <div className="socials">
        <a
          href={process.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <GithubLogo width="32" />
        </a>
        <a
          href={process.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <LinkedInLogo width="32" />
        </a>

        <a
          href="/files/CV_PASTOR_TOM.pdf"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <ResumeLogo width="28" />
        </a>
      </div>
    </div>
  )
}

export default Header
