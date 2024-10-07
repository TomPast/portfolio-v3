import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './SwitchTabs.scss'

interface SwitchTabsProps {
  tabs: { id: string; label: string }[]
  onTabChange: (tabId: string) => void
}

function SwitchTabs({ tabs, onTabChange }: SwitchTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange(tabId)
  }

  useEffect(() => {
    if (backgroundRef.current && containerRef.current) {
      const activeButton = containerRef.current.querySelector(
        '.switch-button.active'
      )
      if (activeButton) {
        gsap.to(backgroundRef.current, {
          x: (activeButton as HTMLElement).offsetLeft,
          width: (activeButton as HTMLElement).offsetWidth,
          duration: 0.3,
          ease: 'power2.inOut',
        })
      }
    }
  }, [activeTab])

  return (
    <div className="switch-container" ref={containerRef}>
      <div className="switch-background" ref={backgroundRef}></div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`switch-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default SwitchTabs
