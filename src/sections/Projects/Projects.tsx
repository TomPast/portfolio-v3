import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Projects.scss'
import PartTitle from '../../components/PartTitle/PartTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import imageUrlBuilder from '@sanity/image-url'

gsap.registerPlugin(ScrollTrigger)

import client from '../../client'

interface Project {
  image: string
  name: string
  description: string
  github: string
  preview: string
  video: {
    url: string
  }
}

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}

function Projects() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "project"]{
        ..., // Récupère tous les champs du document
        video {
          "url": asset->url
        }
      }
    `
      )
      .then((projects) => {
        setProjects(projects)
      })
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const cards = cardRefs.current

    gsap.fromTo(
      text,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    )

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: `top ${55 - index * 20}%`,
            },
          }
        )
      }
    })
  }, [projects])

  return (
    <section className="projects" ref={sectionRef}>
      <div className="column">
        <div ref={textRef}>
          <PartTitle>Projects</PartTitle>
          <p className="description">
            Here are some of the projects I have worked on.
          </p>
          <button className="button">
            Explore more <span className="arrow">→</span>
          </button>
        </div>

        {projects.length >= 1 && (
          <ProjectCard
            ref={(el) => (cardRefs.current[1] = el)}
            image={urlFor(projects[0]?.image).url()}
            name={projects[0]?.name}
            description={projects[0]?.description}
            githubLink={projects[0]?.github}
            demoLink={projects[0]?.preview}
            videoUrl={projects[0]?.video?.url}
          />
        )}
      </div>
      <div className="column right">
        {projects.length >= 2 && (
          <ProjectCard
            ref={(el) => (cardRefs.current[0] = el)}
            image={urlFor(projects[1].image).url()}
            name={projects[1].name}
            description={projects[1].description}
            githubLink={projects[1].github}
            demoLink={projects[1].preview}
            videoUrl={projects[1].video?.url}
          />
        )}
        {projects.length >= 3 && (
          <ProjectCard
            ref={(el) => (cardRefs.current[2] = el)}
            image={urlFor(projects[2].image).url()}
            name={projects[2].name}
            description={projects[2].description}
            githubLink={projects[2].github}
            demoLink={projects[2].preview}
            videoUrl={projects[2].video?.url}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
