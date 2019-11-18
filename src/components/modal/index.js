import React from "react"

import "./index.scss"

const Modal = ({ children, isVisible = false, onHide, type }) =>
  isVisible ? (
    <div
      className="backdrop"
      onClick={onHide}
      onKeyPress={onHide}
      role="button"
      tabIndex="-1"
    >
      <div
        aria-modal="true"
        className="modal"
        role="dialog"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {children}
      </div>
    </div>
  ) : null

export default Modal
