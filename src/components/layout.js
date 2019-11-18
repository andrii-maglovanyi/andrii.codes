import React, { useContext, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUser,
  faSuitcase,
  faGraduationCap,
  faFilePdf,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import ErrorBoundary from "./error-boundary"
import { Store } from "../context"

library.add(faUser, faSuitcase, faGraduationCap, faFilePdf, faListAlt, fab)

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Layout = ({ children, exportPdf }) => {
  const { state } = useContext(Store)

  const cvRef = useRef()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <ErrorBoundary>
      <Header
        siteTitle={data.site.siteMetadata.title}
        ref={cvRef}
        exportPdf={exportPdf}
      />
      <Main className={state.exportType} ref={cvRef}>
        {children}
      </Main>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  exportPdf: PropTypes.bool,
}

Layout.defaultProps = {
  exportPdf: false,
}

export default Layout
