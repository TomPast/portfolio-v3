import React from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="hero">
        <MainTitle />
        <div className="description">
          <p>
            Let me develop your project, focusing on responsiveness,
            performance, security, and a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
