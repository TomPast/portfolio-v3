import React from 'react'
import './Skillset.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PartTitle from '../../components/PartTitle/PartTitle'
import SkillCard from '../../components/SkillCard/SkillCard'

import ReactLogo from '../../assets/logo/react.svg'
import VueLogo from '../../assets/logo/vue.svg'
import AngularLogo from '../../assets/logo/angular.svg'
import AstroLogo from '../../assets/logo/astro.svg'
import FigmaLogo from '../../assets/logo/figma.svg'
import BlenderLogo from '../../assets/logo/blender.svg'
import NodeLogo from '../../assets/logo/node.svg'
import NestLogo from '../../assets/logo/nest.svg'
import SocketLogo from '../../assets/logo/socketio.svg'
import MongoLogo from '../../assets/logo/mongodb.svg'
import PostgreLogo from '../../assets/logo/postgresql.svg'
import DockerLogo from '../../assets/logo/docker.svg'
import VercelLogo from '../../assets/logo/vercel.svg'
import GithubLogo from '../../assets/logo/github.svg'
import GitlabLogo from '../../assets/logo/gitlab.svg'

function Skillset() {
  useGSAP(() => {
    gsap.from('.skillset-title', {
      scrollTrigger: {
        trigger: '.skillset-title',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      y: '-=30',
      opacity: 0,
      ease: 'power2.inOut',
      duration: 0.3,
    })

    gsap.from('.skill-card-row-1', {
      scrollTrigger: {
        trigger: '.skills-row-1',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-=100',
      duration: 0.5,
      stagger: 0.2,
    })

    gsap.from('.skill-card-row-2', {
      scrollTrigger: {
        trigger: '.skills-row-2',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: '-=100',
      duration: 0.5,
      stagger: 0.2,
    })
  })

  return (
    <div>
      <div className="skillset">
        <div className="content">
          <PartTitle className="skillset-title">Skillset</PartTitle>

          <div className="skills">
            <div className="skills-row-1">
              <SkillCard
                className="skill-card-frontend skill-card-row-1"
                images={[ReactLogo, VueLogo, AngularLogo, AstroLogo]}
                title="Frontend"
                description="I create accessible, responsive websites with a focus on clean design, smooth interactions, and attention to detail."
                technologies={[
                  'React',
                  'VueJS',
                  'Angular',
                  'Typescript',
                  'Javascript',
                  'HTML',
                  'CSS',
                  'Astro',
                ]}
              />

              <SkillCard
                className="skill-card-webui skill-card-row-1"
                images={[FigmaLogo, BlenderLogo]}
                title="Web & UI Design"
                description="I'm not a designer, but I like to design and develop beautiful and user-friendly interfaces."
                technologies={['Figma', 'UX/UI', 'Blender']}
              />
            </div>

            <div className="skills-row-2">
              <SkillCard
                className="skill-card-backend skill-card-row-2"
                images={[
                  NodeLogo,
                  NestLogo,
                  SocketLogo,
                  MongoLogo,
                  PostgreLogo,
                ]}
                title="Backend"
                description="I build reliable and efficient backend systems, ensuring smooth performance and seamless integration."
                technologies={[
                  'NodeJS',
                  'NestJS',
                  'Socket.io',
                  'MongoDB',
                  'PostgreSQL',
                  'SQL',
                  'API Rest',
                ]}
              />

              <SkillCard
                className="skill-card-environment skill-card-row-2"
                images={[DockerLogo, VercelLogo, GithubLogo, GitlabLogo]}
                title="Environment"
                description="I use tools that optimize development and deployment, ensuring efficient workflows and reliable infrastructure."
                technologies={[
                  'Docker',
                  'Vercel',
                  'Github',
                  'GitLab',
                  'Nginx',
                  'CI/CD',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset
