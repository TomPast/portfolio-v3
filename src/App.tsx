import React, { useEffect } from 'react'
import './App.scss'
import Main from './sections/Main/Main'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

import { useGSAP } from '@gsap/react'
import Skillset from './sections/Skillset/Skillset'

gsap.registerPlugin(useGSAP)

function App() {
  return (
    <ReactLenis root>
      <div className="body">
        <Main />
        <Skillset />
      </div>
    </ReactLenis>
  )
}

export default App
