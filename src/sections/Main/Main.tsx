import React from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import MainTitle from '../../components/MainTitle/MainTitle'

function Main() {
  return (
    <div className="main">
      <Header />
      <MainTitle />
      <div>
        <p
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            color: 'white',
            fontWeight: 300,
          }}
        >
          I develop accessible, responsive, interactive, and animated websites
          with a strong focus on performance.
        </p>
      </div>
    </div>
  )
}

export default Main
