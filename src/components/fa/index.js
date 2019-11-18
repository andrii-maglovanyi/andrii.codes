import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./index.scss"

export default ({ category = "fa", type }) => (
  <>
    <FontAwesomeIcon
      icon={[category, type]}
      size="sm"
      fixedWidth
      className="fa-icon"
    />
    <span className={[category, type].join(" ")}></span>
  </>
)
