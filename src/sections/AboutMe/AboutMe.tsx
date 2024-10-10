import React from 'react'

import './AboutMe.scss'
import PartTitle from '../../components/PartTitle/PartTitle'

import Me from '../../assets/img/me.png'
import IgSwiper from '../../components/IgSwiper/IgSwiper'
import InstagramIcon from '../../assets/logo/instagram.svg'

function AboutMe() {
  return (
    <section className="about-me">
      <PartTitle className="title">
        About <br /> Me <img src={Me} className="me" />
      </PartTitle>
      <p className="description">
        I am <span className="bold">25</span> and I currently live in{' '}
        <span className="bold">Rennes, France</span>. When I&apos;m not coding,
        I enjoy <span className="bold">traveling, photography, sports</span> and
        playing the <span className="bold">piano</span>.
      </p>{' '}
      <p className="description">
        I also like to <span className="bold">draw</span> in my spare time,{' '}
        <span className="bold">here are a few of my drawings.</span>
      </p>
      <IgSwiper className="draw-swiper" />
      <a
        className="check-more"
        href={process.env.VITE_INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Check more on my Instagram
        <img src={InstagramIcon} alt="Instagram" className="instagram-icon" />→
      </a>
    </section>
  )
}

export default AboutMe
