import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SkillCard.scss'

gsap.registerPlugin(ScrollTrigger)

function SkillCard({
  className,
  images,
  title,
  description,
  technologies,
}: {
  className?: string
  images: any[]
  title: string
  description: string
  technologies: string[]
}) {
  const techListRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current && techListRef.current && imagesRef.current) {
      // Définir l'opacité initiale à 0 pour tous les tech-items et images
      gsap.set([techListRef.current.children, imagesRef.current.children], {
        opacity: 0,
      })

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: 'top 100%',
        onEnter: () => {
          // Animation des images
          gsap.to(Array.from(imagesRef.current?.children || []), {
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out',
          })

          // Animation des tech-items
          gsap.to(Array.from(techListRef.current?.children || []), {
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out',
          })
        },
        onLeaveBack: () => {
          gsap.to(
            [imagesRef.current?.children, techListRef.current?.children],
            {
              opacity: 0,
              duration: 0.3,
            }
          )
        },
      })
    }
  }, [])

  return (
    <div className={`skill-card ${className}`} ref={cardRef}>
      <div className="logo-container" ref={imagesRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={title} className="logo-img" />
        ))}
      </div>

      <h2 className="title">{title}</h2>

      <p className="description">{description}</p>

      <div className="tech-list" ref={techListRef}>
        {technologies.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
            {index < technologies.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
