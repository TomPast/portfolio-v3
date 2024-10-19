import React from 'react'
import './Header.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ReactComponent as Logo } from '../../assets/logo/tp-logo.svg'
import { ReactComponent as GithubLogo } from '../../assets/logo/github-logo.svg'
import { ReactComponent as LinkedInLogo } from '../../assets/logo/linkedin-logo.svg'
import { ReactComponent as ResumeLogo } from '../../assets/logo/cv-logo.svg'

function Header() {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.logo', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        delay: 0.5,
      }),
        gsap.from('.github', {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 0.8,
        }),
        gsap.from('.linkedin', {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 0.9,
        }),
        gsap.from('.resume', {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 1,
        })
    },
    { scope: container }
  )
  return (
    <div className="header" ref={container}>
      <Logo width="48" height="48" className="logo" />

      <div className="socials">
        <a
          href={process.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="social-link github"
        >
          <GithubLogo width="32" />
        </a>
        <a
          href={process.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="social-link linkedin"
        >
          <LinkedInLogo width="32" />
        </a>

        <a
          href="/files/CV_PASTOR_TOM.pdf"
          target="_blank"
          rel="noreferrer"
          className="social-link resume"
        >
          <ResumeLogo width="28" />
        </a>
      </div>
    </div>
  )
}

export default Header
