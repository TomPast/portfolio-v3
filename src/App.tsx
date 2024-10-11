import React from 'react'
import './App.scss'
import Main from './sections/Main/Main'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

import { useGSAP } from '@gsap/react'
import Skillset from './sections/Skillset/Skillset'
import ScrollingText from './sections/ScrollingText/ScrollingText'
import Experiences from './sections/Experiences/Experiences'
import Projects from './sections/Projects/Projects'
import bgImg from './assets/img/secondary-bg.jpg'
import AboutMe from './sections/AboutMe/AboutMe'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
gsap.registerPlugin(useGSAP)

function App() {
  return (
    <ReactLenis root>
      <div
        className="body"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <Main />
        <div className="upper-body">
          <Skillset />
          <ScrollingText />
          <Experiences />
        </div>
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
