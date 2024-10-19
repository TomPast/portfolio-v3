import React, { useRef } from 'react'
import './DockLinks.scss'

// Définition de l'interface pour les props
interface DockLink {
  url: string
  icon: string
  tooltip: string
  className?: string
}

interface DockLinksProps {
  links: DockLink[]
}

function DockLinks({ links }: DockLinksProps) {
  const dockRef = useRef<HTMLDivElement>(null)

  const maxAdditionalSize = 5

  const scaleValue = (
    value: number,
    from: [number, number],
    to: [number, number]
  ) => {
    const scale = (to[1] - to[0]) / (from[1] - from[0])
    const capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
    return Math.floor(capped * scale + to[0])
  }

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return

    const mousePosition = ev.clientX
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left
    const iconWidth = ev.currentTarget.getBoundingClientRect().width

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    )

    dockRef.current.style.setProperty(
      '--dock-offset-left',
      `${offsetPixels * -1}px`
    )

    dockRef.current.style.setProperty(
      '--dock-offset-right',
      `${offsetPixels}px`
    )
  }

  return (
    <div>
      <nav ref={dockRef} className="dock">
        <ul>
          {links.map((link, index) => (
            <li key={index} className="app" onMouseMove={handleAppHover}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={link.className}
              >
                <img src={link.icon} alt={link.tooltip} />
                <span className="tooltip">{link.tooltip}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DockLinks
