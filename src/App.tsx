import React, { useEffect } from 'react'
import './App.scss'
import Main from './sections/Main/Main'
import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis root>
      <div className="body">
        <Main />
      </div>
    </ReactLenis>
  )
}

export default App
