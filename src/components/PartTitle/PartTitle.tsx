import React from 'react'
import './PartTitle.scss'

function PartTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h3 className={`part-title ${className}`}>{children}</h3>
}

export default PartTitle
