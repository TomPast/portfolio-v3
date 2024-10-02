import React, { useMemo } from 'react'
import './Skillset.scss'
import { ReactComponent as Logo } from '../../assets/img/curved-text.svg'
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
  const timeline = useMemo(() => gsap.timeline({ repeat: -1 }), [])

  useGSAP(() => {
    timeline.fromTo(
      '#masterTextPath',
      {
        attr: {
          startOffset: '0%',
        },
      },
      {
        ease: 'none',
        duration: 40,
        attr: {
          startOffset: '135%', //140
        },
      },
      0
    )
    timeline.fromTo(
      '#masterTextPathClone',
      {
        attr: {
          startOffset: '-135%',
        },
      },
      {
        ease: 'none',
        duration: 40,
        attr: {
          startOffset: '0%',
        },
      },
      0
    ),
      gsap.from('.animated-text', {
        y: '+=100',
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.5,
        delay: 0.5,
      }),
      gsap.from('.content', {
        y: '+=100',
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.5,
        delay: 0.5,
      }),
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skill-card',
        },
        y: '+=100',
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.5,
        stagger: 0.1,
      })
  })

  return (
    <div className="skillset">
      <div className="animated-text">
        <Logo />
      </div>
      <div className="content">
        <PartTitle>Skillset</PartTitle>

        <div className="skills">
          <div className="skills-row-1">
            <SkillCard
              className="skill-card-frontend"
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
              className="skill-card-webui"
              images={[FigmaLogo, BlenderLogo]}
              title="Web & UI Design"
              description="I'm not a designer, but I like to design and develop beautiful and user-friendly interfaces."
              technologies={['Figma', 'UX/UI', 'Blender']}
            />
          </div>

          <div className="skills-row-2">
            <SkillCard
              className="skill-card-backend"
              images={[NodeLogo, NestLogo, SocketLogo, MongoLogo, PostgreLogo]}
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
              className="skill-card-environment   "
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
  )
}

export default Skillset
