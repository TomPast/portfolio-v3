import React, { useState } from 'react'
import PartTitle from '../../components/PartTitle/PartTitle'
import './Experiences.scss'
import SwitchTabs from '../../components/SwitchTabs/SwitchTabs'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import IraiserLogo from '../../assets/logo/iraiser.svg'
import SyaLogo from '../../assets/logo/sya-digital.svg'
import SpikeelabsLogo from '../../assets/logo/spikeelabs.svg'
import EnsimLogo from '../../assets/logo/ensim.svg'
import { ReactComponent as CurvedEnd } from '../../assets/img/curved-end.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Experiences() {
  const [activeTab, setActiveTab] = useState('experiences')
  useGSAP(() => {
    gsap.from('.experiences-title', {
      scrollTrigger: {
        trigger: '.experiences',
        start: 'top 70%',
      },
      y: '-=50',
      opacity: 0,
      ease: 'power2.inOut',
      duration: 0.3,
    }),
      gsap.from('.experiences-tabs', {
        scrollTrigger: {
          trigger: '.experiences',
          start: 'top 70%',
        },
        y: '-=50',
        delay: 0.3,
        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.3,
      })
  })

  return (
    <section className="experiences">
      <div className="content">
        <PartTitle className="experiences-title">Experience</PartTitle>

        <SwitchTabs
          className="experiences-tabs"
          tabs={[
            { id: 'experiences', label: 'Experience' },
            { id: 'education', label: 'Education' },
          ]}
          onTabChange={(tabId) => {
            setActiveTab(tabId)
          }}
        />

        {activeTab === 'experiences' && (
          <div className="experiences-content">
            <ExperienceItem
              companyLogo={IraiserLogo}
              companyUrl="https://iraiser.com"
              role="Software Engineer"
              companyName="iRaiser"
              location="Nantes, France"
              startDate={new Date('2024-11-01')}
              description={[
                'Participation in the development of a SAAS product to help non-profit associations and NGOs raise funds',
                'Solution customization and development for specific customer requirements',
              ]}
              technologies={['PHP', 'Javascript', 'HTML', 'CSS', 'Docker']}
              index={0}
            />

            <ExperienceItem
              companyLogo={SyaLogo}
              companyUrl="https://www.linkedin.com/company/sya-digital/"
              role="Fullstack Developer"
              companyName="SYA Digital"
              location="Rennes, France"
              startDate={new Date('2022-10-01')}
              endDate={new Date('2024-07-31')}
              description={[
                'Development of the frontend and backend of a SAAS cybersecurity product',
                'Development of a real-time multi-user IS cartography system',
                'Development of the showcase site of the company: sya.digital',
              ]}
              technologies={[
                'React',
                'Typescript',
                'NodeJS',
                'NestJS',
                'Socket.io',
                'Docker',
                'PostgreSQL',
                'MongoDB',
                'Astro',
              ]}
              index={1}
            />

            <ExperienceItem
              companyLogo={SpikeelabsLogo}
              companyUrl="https://www.spikeelabs.com/"
              role="Fullstack Developer"
              companyName="SpikeeLabs"
              location="Rennes, France"
              startDate={new Date('2021-03-01')}
              endDate={new Date('2022-09-30')}
              description={[
                'Development of a portal to manage judicial requisitions for a telephone operator',
                'Participation in the development of an internal design system',
                'Development of a portal to manage financial objects and assets',
                'Development of a billing and dashboard solution demonstrator for the telecoms sector',
              ]}
              technologies={[
                'React',
                'VueJS',
                'Angular',
                'Typescript',
                'Java',
                'Python',
                'Django',
                'Docker',
                'PostgreSQL',
                'MSSQL',
              ]}
              isLastItem
              index={2}
            />
          </div>
        )}

        {activeTab === 'education' && (
          <div className="experiences-content">
            <ExperienceItem
              companyLogo={EnsimLogo}
              companyUrl="https://ensim.univ-lemans.fr/"
              role="IT Engineering Degree"
              companyName="ENSIM (École Nationale Supérieure d'Ingénieurs du Mans)"
              location="Le Mans, France"
              startDate={new Date('2016-09-01')}
              endDate={new Date('2021-09-01')}
              simpleItem
              index={0}
            />
          </div>
        )}
      </div>

      <div className="curved-end">
        <CurvedEnd />
      </div>
    </section>
  )
}

export default Experiences
