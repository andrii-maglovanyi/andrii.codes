import { Link } from "gatsby"
import React, { forwardRef } from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"
import Switch from "../components/switch"
import Pdf from "../components/pdf"

const HeaderWrapper = styled.header`
  background: #212121;
  color: var(--gray-color);
  margin-bottom: 2rem;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  maxwidth: 960px;
  padding: 0.5rem 1rem 0.2rem;
`

const Header = forwardRef((props, cvRef) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Logo style={{ width: "80px" }} />
        </Link>
      </h1>
      {props.exportPdf && (
        <>
          <Pdf ref={cvRef} />|
        </>
      )}
      <Switch className="gtm-toggle-theme" />
    </HeaderContainer>
  </HeaderWrapper>
))

export default Header
