import React from 'react'
import './ProjectCard.scss'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  githubLink: string
  demoLink: string
}

function ProjectCard({
  image,
  title,
  description,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={image} alt="project-preview" />
      <div className="project-info">
        <div className="project-info-header">
          <h3>{title}</h3>
          <div className="project-info-header-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        </div>

        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
