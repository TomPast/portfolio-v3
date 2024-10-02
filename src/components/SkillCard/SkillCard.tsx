import React from 'react'
import './SkillCard.scss'

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
  return (
    <div className={`skill-card ${className}`}>
      <div className="logo-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={title} className="logo-img" />
        ))}
      </div>

      <h2 className="title">{title}</h2>

      <p className="description">{description}</p>

      <div className="tech-list">
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
