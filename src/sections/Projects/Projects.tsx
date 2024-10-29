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
  title: string
  description: string
  github: string
  preview: string
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
    client.fetch(`*[_type == "project"]`).then((projects) => {
      setProjects(projects)
      console.log(projects)
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
              start: `top ${70 - index * 20}%`,
            },
          }
        )
      }
    })
  }, [])

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
            image={urlFor(projects[0]?.image).width(600).height(300).url()}
            title={projects[0]?.title}
            description={projects[0]?.description}
            githubLink={projects[0]?.github}
            demoLink={projects[0]?.preview}
          />
        )}
      </div>
      <div className="column right">
        {projects.length >= 2 && (
          <ProjectCard
            ref={(el) => (cardRefs.current[0] = el)}
            image={urlFor(projects[1].image).width(600).height(300).url()}
            title={projects[1].title}
            description={projects[1].description}
            githubLink={projects[1].github}
            demoLink={projects[1].preview}
          />
        )}
        {projects.length >= 3 && (
          <ProjectCard
            ref={(el) => (cardRefs.current[2] = el)}
            image={urlFor(projects[2].image).width(600).height(300).url()}
            title={projects[2].title}
            description={projects[2].description}
            githubLink={projects[2].github}
            demoLink={projects[2].preview}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
