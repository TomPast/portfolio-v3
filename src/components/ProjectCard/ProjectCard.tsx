import React from 'react'
import './ProjectCard.scss'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  githubLink: string
  demoLink: string
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (props, ref) => {
    return (
      <div className="project-card" ref={ref}>
        <img src={props.image} alt="project-preview" />
        <div className="project-info">
          <div className="project-info-header">
            <h3>{props.title}</h3>
            <div className="project-info-header-links">
              <a
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{' '}
              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>

          <p>{props.description}</p>
        </div>
      </div>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
