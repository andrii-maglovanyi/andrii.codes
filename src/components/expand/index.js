import React, { useState } from "react"

import "./index.scss"

export default ({ className, children, title }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className={["expand", isExpanded ? "expanded" : ""].join(" ")}>
      <span
        className={["toggle", className, title ? "left" : ""].join(" ")}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyPress={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex="0"
      >
        <span className="prefix {">
          {isExpanded ? "Read less" : "Read more"}
        </span>
        {title ? " " + title : ""}
      </span>
      <div className="extra">
        <div>{children}</div>
      </div>
    </div>
  )
}
