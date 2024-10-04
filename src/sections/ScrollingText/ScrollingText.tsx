import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './ScrollingText.scss'

function ScrollingText() {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.innerText.split(' ')
      textRef.current.innerHTML = words
        .map((word) => `<span>${word} </span>`)
        .join('')

      gsap.fromTo(
        textRef.current.children,
        { opacity: 0.4 },
        {
          opacity: 1,
          color: 'white',
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      )
    }
  }, [])

  return (
    <div className="scrolling-text">
      <p ref={textRef}>
        My broad experience across Web Design, Frontend, Backend, and Deployment
        gives me a well-rounded perspective on the entire product development
        process. This allows me to effectively plan and implement system
        architectures that meet project needs from start to finish.
      </p>
    </div>
  )
}

export default ScrollingText
