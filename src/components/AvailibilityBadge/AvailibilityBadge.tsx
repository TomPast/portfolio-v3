import React, { useRef } from 'react'
import './AvailibilityBadge.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function AvailibityBadge() {
  const badgeRef = useRef(null)

  useGSAP(() => {
    const badge = badgeRef.current as HTMLElement | null
    if (!badge) return null

    const text = badge?.querySelector('span')
    const bullet = badge?.querySelector('.bullet')
    if (!text || !bullet) return null

    const textHeight = text.offsetHeight + 12

    const tl = gsap.timeline({})

    tl.set(badge, {
      opacity: 0,
      width: 0,
      height: textHeight,
      padding: '0 0',
    })
      .set(text, { opacity: 0 })
      .set(bullet, { opacity: 0, width: 0, height: 0 })
      .to(badge, { opacity: 1, duration: 0.3, delay: 1 })
      .to(badge, {
        width: 'auto',
        padding: '8px 10px',
        duration: 0.5,
      })
      .to(text, { opacity: 1, duration: 0.5, delay: 0.3 })
      .to(bullet, { opacity: 1, width: 10, height: 10, duration: 0.3 })
  }, [])

  return (
    <div className="badge" ref={badgeRef}>
      <div className="bullet"></div>
      <span>Open to work</span>
    </div>
  )
}

export default AvailibityBadge
