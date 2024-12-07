import React, { useState, forwardRef, useRef, useEffect } from 'react'
import './ProjectCard.scss'

interface ProjectCardProps {
  image: string
  name: string
  description: string
  githubLink: string
  demoLink: string
  videoUrl: string | null
}

import { ReactComponent as GithubLogo } from '../../assets/logo/github.svg'
import { ReactComponent as YoutubeLogo } from '../../assets/logo/youtube.svg'

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, name, description, githubLink, demoLink, videoUrl }, ref) => {
    const [isHovered, setIsHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
      if (videoRef.current) {
        if (isHovered) {
          videoRef.current.currentTime = 0
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      }
    }, [isHovered])

    return (
      <div
        className="project-card"
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <div className="media-container">
            <img src={image} alt={name} />
            {videoUrl && (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className={`project-video ${isHovered ? 'visible' : ''}`}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className={`project-info ${isHovered ? 'visible' : ''}`}>
              <div className="project-info-header">
                <h3>{name}</h3>
                <div className="project-info-header-links">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: githubLink ? 'inline-block' : 'none' }}
                  >
                    <GithubLogo width={32} height={32} />
                  </a>
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: demoLink ? 'inline-block' : 'none' }}
                  >
                    <YoutubeLogo width={32} height={32} />
                  </a>
                </div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
