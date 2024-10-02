import React, { useMemo } from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'
import AvailibityBadge from '../../components/AvailibilityBadge/AvailibilityBadge'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Main() {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.description', {
        y: '-=50',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        delay: 0.3,
      }),
        gsap.from('.title1', {
          y: '-=50',
          opacity: 0,
          ease: 'power2.inOut',
          duration: 0.3,
        }),
        gsap.from('.title2', {
          y: '-=50',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          delay: 0.1,
        }),
        gsap.from('.badge', {
          y: '-=50',
          opacity: 0,
          ease: 'power2.inOut',
          duration: 0.3,
          delay: 0.5,
        })
    },
    { scope: container }
  )

  return (
    <div className="main" ref={container}>
      <Header />
      <div className="hero">
        <MainTitle />
        <div className="description">
          <p>
            Let me develop your project, focusing on responsiveness,
            performance, security, and a seamless user experience.
          </p>
        </div>
        <AvailibityBadge />
      </div>
    </div>
  )
}

export default Main
