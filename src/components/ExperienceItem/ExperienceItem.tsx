import React, { useEffect, useRef, useState } from 'react'
import './ExperienceItem.scss'
import { gsap } from 'gsap'

function ExperienceItem({
  companyLogo,
  role,
  companyName,
  location,
  startDate,
  endDate,
  description,
  technologies,
  isLastItem,
  simpleItem,
  index,
}: {
  companyLogo: string
  role: string
  companyName: string
  location: string
  startDate: Date
  endDate?: Date
  description?: string[]
  technologies?: string[]
  isLastItem?: boolean
  simpleItem?: boolean
  index?: number
}) {
  const itemRef = useRef(null)
  const logoRef = useRef(null)
  const lineRef = useRef(null)
  const companyNameRef = useRef(null)
  const roleRef = useRef(null)
  const datesRef = useRef(null)
  const descriptionRef = useRef(null)
  const techBadgesRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline({ delay: index ? index * 0.3 : 0 })

      tl.fromTo(
        itemRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' }
      )

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
      )

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top' },
          { scaleY: 1, duration: 0.3, ease: 'power3.out' },
          '-=0.2'
        )
      }

      tl.fromTo(
        [companyNameRef.current, roleRef.current, datesRef.current],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power3.out' },
        '-=0.2'
      )

      tl.fromTo(
        descriptionRef.current.children,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.2, stagger: 0.05, ease: 'power3.out' },
        '-=0.1'
      )

      tl.fromTo(
        techBadgesRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: 'back.out(1.5)',
        },
        '-=0.1'
      )
    }
  }, [isVisible, index])

  const formatDate = (date: Date) => {
    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.',
    ]
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const calculateDuration = (start: Date, end: Date) => {
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    )

    let duration = ''
    if (diffYears > 0) {
      duration += `${diffYears} year${diffYears > 1 ? 's' : ''}`
      if (diffMonths > 0) duration += ' and '
    }
    if (diffMonths > 0) {
      duration += `${diffMonths} months`
    }
    return duration
  }

  return (
    <div className="experience-item" ref={itemRef} style={{ opacity: 0 }}>
      <div className="left-content">
        <img src={companyLogo} className="logo-img" ref={logoRef} />
        {!simpleItem && (
          <div
            className={`vertical-line ${isLastItem ? 'fade-out' : ''}`}
            ref={lineRef}
          />
        )}
      </div>
      <div className="right-content">
        <h3 ref={companyNameRef}>{companyName}</h3>
        <span className="role" ref={roleRef}>
          {role} <span className="location">{location}</span>
        </span>
        <span className="dates" ref={datesRef}>
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Présent'}{' '}
          ({calculateDuration(startDate, endDate || new Date())})
        </span>
        <ul className="description-list" ref={descriptionRef}>
          {description?.map((item, index) => (
            <li className="description-item" key={index}>
              - {item}
            </li>
          ))}
        </ul>
        <div className="tech-badges" ref={techBadgesRef}>
          {technologies?.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
