import React, { useState } from 'react'
import PartTitle from '../../components/PartTitle/PartTitle'
import './Experiences.scss'
import SwitchTabs from '../../components/SwitchTabs/SwitchTabs'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import SyaLogo from '../../assets/logo/sya-digital.svg'
import SpikeelabsLogo from '../../assets/logo/spikeelabs.svg'
import EnsimLogo from '../../assets/logo/ensim.svg'
import { ReactComponent as CurvedEnd } from '../../assets/img/curved-end.svg'

function Experiences() {
  const [activeTab, setActiveTab] = useState('experiences')

  return (
    <section className="experiences">
      <div className="content">
        <PartTitle>Experience</PartTitle>

        <SwitchTabs
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
              companyLogo={SyaLogo}
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
            />

            <ExperienceItem
              companyLogo={SpikeelabsLogo}
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
            />
          </div>
        )}

        {activeTab === 'education' && (
          <div className="experiences-content">
            <ExperienceItem
              companyLogo={EnsimLogo}
              role="IT Engineering Degree"
              companyName="ENSIM (École Nationale Supérieure d'Ingénieurs du Mans)"
              location="Le Mans, France"
              startDate={new Date('2016-09-01')}
              endDate={new Date('2021-09-01')}
              simpleItem
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
