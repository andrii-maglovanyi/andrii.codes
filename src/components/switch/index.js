import React, { useEffect, useRef } from "react"

import "./index.scss"

export default ({ className }) => {
  const toggleRef = useRef()

  const toggleTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark")
      sessionStorage.setItem("theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      sessionStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const currentTheme =
      sessionStorage.getItem("theme") ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        "dark") ||
      null

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme)

      if (currentTheme === "dark") {
        toggleRef.current.checked = true
      }
    }
  }, [])

  return (
    <div className="switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          className={className}
          type="checkbox"
          id="checkbox"
          onClick={toggleTheme}
          ref={toggleRef}
        />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
