import React, { useMemo } from 'react'
import gsap from 'gsap'
import './StartCurvedText.scss'

import { ReactComponent as CurvedText } from '../../assets/img/curved-text.svg'
import { useGSAP } from '@gsap/react'

function StartCurvedText() {
  const container = React.useRef<HTMLDivElement>(null)
  const timeline = useMemo(() => gsap.timeline({ repeat: -1 }), [])

  useGSAP(() => {
    timeline.fromTo(
      '#masterTextPath',
      {
        attr: {
          startOffset: '0%',
        },
      },
      {
        ease: 'none',
        duration: 40,
        attr: {
          startOffset: '135%',
        },
      },
      0
    )
    timeline.fromTo(
      '#masterTextPathClone',
      {
        attr: {
          startOffset: '-135%',
        },
      },
      {
        ease: 'none',
        duration: 40,
        attr: {
          startOffset: '0%',
        },
      },
      0
    ),
      gsap.from('.animated-text', {
        y: '+=100',
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.5,
        delay: 0.5,
      })
  })

  return (
    <div className="animated-text">
      <CurvedText />
    </div>
  )
}

export default StartCurvedText
