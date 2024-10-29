import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Contact.scss'
import PartTitle from '../../components/PartTitle/PartTitle'

import { ReactComponent as InstagramIcon } from '../../assets/logo/instagram_white.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/logo/linkedin-logo.svg'
import { ReactComponent as GithubIcon } from '../../assets/logo/github.svg'
import { ReactComponent as CVIcon } from '../../assets/logo/cv.svg'
import ContactForm from '../../components/ContactForm/ContactForm'
import DockLinks from '../../components/DockLinks/DockLinks'

import githubLogo from '../../assets/logo/github.png'
import linkedinLogo from '../../assets/logo/linkedin.png'
import resumeLogo from '../../assets/logo/cv.png'
import instagramLogo from '../../assets/logo/ig-logo.png'

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const elements = sectionRef.current!.children

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      }
    )
  }, [])

  return (
    <section className="contact" ref={sectionRef}>
      <PartTitle className="title">Keep in touch.</PartTitle>

      <p className="description">
        I&apos;m open to work as <span className="bold">Web Developer.</span>{' '}
        <br /> Feel free to get in touch and talk more about your projects.
      </p>

      <div className="socials">
        <DockLinks
          links={[
            {
              icon: instagramLogo,
              url: process.env.VITE_INSTAGRAM_URL || '',
              tooltip: 'Instagram',
              className: 'social-icon-instagram',
            },
            {
              icon: githubLogo,
              url: process.env.VITE_GITHUB_URL || '',
              tooltip: 'Github',
              className: 'social-icon-github',
            },
            {
              icon: linkedinLogo,
              url: process.env.VITE_LINKEDIN_URL || '',
              tooltip: 'LinkedIn',
              className: 'social-icon-linkedin',
            },
            {
              icon: resumeLogo,
              url: '/files/CV_PASTOR_TOM.pdf',
              tooltip: 'CV',
              className: 'social-icon-cv',
            },
          ]}
        />
      </div>

      <a href="mailto:contact@tompastor.fr" className="email">
        contact@tompastor.fr
      </a>

      <ContactForm className="form" />
    </section>
  )
}

export default Contact
