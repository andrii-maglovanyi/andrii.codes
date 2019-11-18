import React, { useState } from "react"

import "./index.scss"

const mult = 20
let order = 0

export const ProgressBar = ({ scale }) => {
  return (
    <span className="progress-bar">
      <Filler percentage={scale * mult} />
    </span>
  )
}

const Filler = ({ percentage }) => {
  const [width, setWidth] = useState(0)
  setTimeout(() => setWidth(percentage), order)
  order += 100
  return <span className="filler" style={{ width: `${width}%` }} />
}
