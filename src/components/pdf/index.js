import React, { forwardRef, useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Doc from "./doc-service"
import Modal from "../modal"
import { Store, SET_EXPORT_TYPE } from "../../context"

import "./index.scss"

export default forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false)
  const { dispatch } = useContext(Store)

  const handleExportPdf = (type) => {
    dispatch({ type: SET_EXPORT_TYPE, payload: type })
    setTimeout(() => Doc.createPdf(ref.current, type), 100)
    setShowModal(false)
  }
  return (
    <>
      <Modal
        isVisible={showModal}
        onHide={() => setShowModal(false)}
        type="small"
      >
        Export{" "}
        <span
          className="action-link gtm-print-brief"
          onClick={() => handleExportPdf("brief")}
          onKeyPress={() => handleExportPdf("brief")}
          role="button"
          tabIndex="0"
        >
          brief
        </span>{" "}
        or{" "}
        <span
          className="action-link gtm-print-detailed"
          onClick={() => handleExportPdf("detailed")}
          onKeyPress={() => handleExportPdf("detailed")}
          role="button"
          tabIndex="0"
        >
          {" "}
          detailed
        </span>{" "}
        resume?
      </Modal>
      <div
        className="pdf gtm-export-cv"
        onClick={() => setShowModal(true)}
        onKeyPress={() => setShowModal(true)}
        role="button"
        tabIndex="0"
      >
        <FontAwesomeIcon icon="file-pdf" size="lg" fixedWidth />
      </div>
    </>
  )
})
