import React from 'react'
import './Header.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ReactComponent as Logo } from '../../assets/logo/tp-logo.svg'

import DockLinks from '../DockLinks/DockLinks'

import githubLogo from '../../assets/logo/github.png'
import linkedinLogo from '../../assets/logo/linkedin.png'
import resumeLogo from '../../assets/logo/cv.png'

function Header() {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.logo', {
        opacity: 0,
        scale: 0.4,
        duration: 0.3,
        ease: 'power2.inOut',
        delay: 0.5,
      }),
        gsap.from('.github', {
          opacity: 0,
          scale: 0.4,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 0.8,
        }),
        gsap.from('.linkedin', {
          opacity: 0,
          scale: 0.4,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 0.9,
        }),
        gsap.from('.resume', {
          opacity: 0,
          scale: 0.4,
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
        <DockLinks
          links={[
            {
              url: process.env.VITE_GITHUB_URL || '',
              icon: githubLogo,
              tooltip: 'Github',
              className: 'github',
            },
            {
              url: process.env.VITE_LINKEDIN_URL || '',
              icon: linkedinLogo,
              tooltip: 'Linkedin',
              className: 'linkedin',
            },
            {
              url: '/files/CV_PASTOR_TOM.pdf',
              icon: resumeLogo,
              tooltip: 'Resume',
              className: 'resume',
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Header
