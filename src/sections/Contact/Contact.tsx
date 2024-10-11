import React from 'react'

import './Contact.scss'
import PartTitle from '../../components/PartTitle/PartTitle'

import { ReactComponent as InstagramIcon } from '../../assets/logo/instagram_white.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/logo/linkedin-logo.svg'
import { ReactComponent as GithubIcon } from '../../assets/logo/github.svg'
import { ReactComponent as CVIcon } from '../../assets/logo/cv.svg'
import ContactForm from '../../components/ContactForm/ContactForm'

function Contact() {
  return (
    <section className="contact">
      <PartTitle className="title">Keep in touch.</PartTitle>

      <p className="description">
        I&apos;m open to work as <span className="bold">Web Developer.</span>{' '}
        <br /> Feel free to get in touch and talk more about your projects.
      </p>

      <div className="socials">
        <a
          href={process.env.VITE_INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="social-icon" fill="red" />
        </a>
        <a href={process.env.VITE_GITHUB_URL} target="_blank" rel="noreferrer">
          <GithubIcon className="social-icon" />
        </a>
        <a
          href={process.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="social-icon" />
        </a>
        <a href="/files/CV_PASTOR_TOM.pdf" target="_blank" rel="noreferrer">
          <CVIcon className="social-icon" />
        </a>
      </div>

      <a href="mailto:contact@tompastor.fr" className="email">
        contact@tompastor.fr
      </a>

      <ContactForm className="form" />
    </section>
  )
}

export default Contact
