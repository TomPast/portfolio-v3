import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './AboutMe.scss'
import PartTitle from '../../components/PartTitle/PartTitle'

import Me from '../../assets/img/me.png'
import IgSwiper from '../../components/IgSwiper/IgSwiper'
import InstagramIcon from '../../assets/logo/instagram.svg'

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    timeline
      .fromTo(
        '.about-me-title',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        '.about-me-description',
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )

    gsap.fromTo(
      '.about-me-photo',
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.about-me-description',
          start: 'bottom 70%',
        },
      }
    )

    gsap.fromTo(
      '.about-me-carousel',
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.about-me-description',
          start: 'bottom 80%',
        },
      }
    )

    gsap.fromTo(
      '.about-me-instagram',
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.about-me-carousel',
          start: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section className="about-me">
      <PartTitle className="title about-me-title">
        About <br /> Me <img src={Me} className="me about-me-photo" />
      </PartTitle>
      <div className="about-me-description">
        <p className="description">
          I am <span className="bold">25</span> and I currently live in{' '}
          <span className="bold">Rennes, France</span>. When I&apos;m not
          coding, I enjoy{' '}
          <span className="bold">traveling, photography, sports</span> and
          playing the <span className="bold">piano</span>.
        </p>{' '}
        <p className="description">
          I also like to <span className="bold">draw</span> in my spare time,{' '}
          <span className="bold">here are a few of my drawings.</span>
        </p>
      </div>
      <div className="about-me-carousel">
        <IgSwiper className="draw-swiper" />
      </div>
      <a
        className="check-more about-me-instagram"
        href={process.env.VITE_INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Voir plus sur mon Instagram
        <img src={InstagramIcon} alt="Instagram" className="instagram-icon" />→
      </a>
    </section>
  )
}

export default AboutMe
