import React from 'react'

import './Projects.scss'
import PartTitle from '../../components/PartTitle/PartTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function Projects() {
  return (
    <section className="projects">
      <div className="column">
        <div>
          <PartTitle>Projects</PartTitle>
          <p className="description">
            Here are some of the projects I have worked on.
          </p>
          <button className="button">
            Explore more <span className="arrow">→</span>
          </button>
        </div>

        <ProjectCard
          image={'https://placehold.co/600x300'}
          title="React Component Library"
          description="A library of reusable React components"
          githubLink="https://github.com/your-repo/react-component-library"
          demoLink="https://your-repo.github.io/react-component-library"
        />
      </div>
      <div className="column right">
        <ProjectCard
          image={'https://placehold.co/600x300'}
          title="React Component Library"
          description="A library of reusable React components"
          githubLink="https://github.com/your-repo/react-component-library"
          demoLink="https://your-repo.github.io/react-component-library"
        />
        <ProjectCard
          image={'https://placehold.co/600x300'}
          title="React Component Library"
          description="A library of reusable React components"
          githubLink="https://github.com/your-repo/react-component-library"
          demoLink="https://your-repo.github.io/react-component-library"
        />
      </div>
    </section>
  )
}

export default Projects
