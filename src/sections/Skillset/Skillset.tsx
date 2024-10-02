import React, { useMemo } from 'react'
import './Skillset.scss'
import { ReactComponent as Logo } from '../../assets/img/curved-text.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PartTitle from '../../components/PartTitle/PartTitle'

function Skillset() {
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
          startOffset: '135%', //140
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
      }),
      gsap.from('.content', {
        y: '+=100',
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.5,
        delay: 0.5,
      })
  })

  return (
    <div className="skillset">
      <div className="animated-text">
        <Logo />
      </div>
      <div className="content">
        <PartTitle>Skillset</PartTitle>
      </div>
    </div>
  )
}

export default Skillset
