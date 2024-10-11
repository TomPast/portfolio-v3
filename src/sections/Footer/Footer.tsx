import React from 'react'

import './Footer.scss'

import MeLogo from '../../assets/img/me.png'

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2024 - Designed & Developed by{' '}
        <img src={MeLogo} alt="Tom Pastor" className="me-logo" />
        Tom Pastor.
      </p>
      <p>Built with React and GSAP. Hosted on Vercel.</p>
    </footer>
  )
}

export default Footer
