import React, { useEffect } from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'
import AvailibityBadge from '../../components/AvailibilityBadge/AvailibilityBadge'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Main() {
  const container = React.useRef<HTMLDivElement>(null)
  const heroRef = React.useRef<HTMLDivElement>(null)

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
        })
    },
    { scope: container }
  )

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        const maxScroll = 500 // Limite maximale de défilement pour l'effet
        const parallaxEffect = Math.min(scrollPosition, maxScroll) * 0.5 // Réduire la vitesse de l'effet
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1)

        gsap.to(heroRef.current.children, {
          y: parallaxEffect,
          opacity: opacity,
          duration: 0.5,
          ease: 'power1.out',
        })
      }
    }

    window.addEventListener('scroll', handleParallax)

    return () => {
      window.removeEventListener('scroll', handleParallax)
    }
  }, [])

  return (
    <div className="main" ref={container}>
      <Header />
      <div className="hero" ref={heroRef}>
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
