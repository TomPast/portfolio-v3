import React from 'react'
import './PartTitle.scss'

function PartTitle({ children }: { children: string }) {
  return <h3 className="part-title">{children}</h3>
}

export default PartTitle
