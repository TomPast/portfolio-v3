import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import './Cursor.scss'

function Cursor() {
  const cursorOutlineRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Vérifier si c'est un appareil mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
          'ontouchstart' in window
      )
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Ne pas exécuter sur mobile

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
      gsap.to(cursorOutlineRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll('a, button')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return // Ne pas exécuter sur mobile

    if (isHovered) {
      gsap.to(cursorDotRef.current, {
        scale: 3.5,
        duration: 0.3,
      })
      gsap.to(cursorOutlineRef.current, {
        opacity: 0,
        duration: 0.3,
      })
    } else {
      gsap.to(cursorDotRef.current, {
        scale: 1,
        duration: 0.3,
      })
      gsap.to(cursorOutlineRef.current, {
        opacity: 1,
        duration: 0.3,
      })
    }
  }, [isHovered, isMobile])

  if (isMobile) return null // Ne pas rendre le composant sur mobile

  return (
    <>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  )
}

export default Cursor
