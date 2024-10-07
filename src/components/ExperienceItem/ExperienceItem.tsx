import React from 'react'
import './ExperienceItem.scss'

function ExperienceItem({
  companyLogo,
  role,
  companyName,
  location,
  startDate,
  endDate,
  description,
  technologies,
  isLastItem,
  simpleItem,
  index,
}: {
  companyLogo: string
  role: string
  companyName: string
  location: string
  startDate: Date
  endDate?: Date
  description?: string[]
  technologies?: string[]
  isLastItem?: boolean
  simpleItem?: boolean
  index?: number
}) {
  const formatDate = (date: Date) => {
    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.',
    ]
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const calculateDuration = (start: Date, end: Date) => {
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    )

    let duration = ''
    if (diffYears > 0) {
      duration += `${diffYears} year${diffYears > 1 ? 's' : ''}`
      if (diffMonths > 0) duration += ' and '
    }
    if (diffMonths > 0) {
      duration += `${diffMonths} months`
    }
    return duration
  }

  return (
    <div className="experience-item">
      <div className="left-content">
        <img src={companyLogo} className="logo-img" />
        {!simpleItem && (
          <div className={`vertical-line ${isLastItem ? 'fade-out' : ''}`} />
        )}
      </div>
      <div className="right-content">
        <h3>{companyName}</h3>
        <span className="role">
          {role} <span className="location">{location}</span>
        </span>
        <span className="dates">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Présent'}{' '}
          ({calculateDuration(startDate, endDate || new Date())})
        </span>
        <ul className="description-list">
          {description?.map((item, index) => (
            <li className="description-item" key={index}>
              - {item}
            </li>
          ))}
        </ul>
        <div className="tech-badges">
          {technologies?.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
