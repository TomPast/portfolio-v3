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

gsap.registerPlugin(useGSAP)

function App() {
  return (
    <ReactLenis root>
      <div className="body">
        <Main />
        <div className="upper-body">
          <Skillset />
          <ScrollingText />
          <Experiences />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
