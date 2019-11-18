import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const highContrastColors = {
  gray: "var(--secondary-color)",
  red: "#aa00000",
  initial: "initial",
}

const Component = styled.p`
  color: ${({ color }) => highContrastColors[color] || "initial"};
  font-style: ${({ variant }) => variant || "initial"};
  font-weight: ${({ weight }) => weight || "initial"};
  text-align: ${({ align }) => align || "initial"};
  text-transform: ${({ transform }) => transform || "initial"};
`

const Text = ({ children, component, ...props }) => (
  <Component as={component} {...props}>
    {children}
  </Component>
)

Text.propTypes = {
  align: PropTypes.oneOf(["initial", "left", "right", "center"]),
  children: PropTypes.node,
  color: PropTypes.oneOf(["initial", "red", "gray"]),
  component: PropTypes.string,
  variant: PropTypes.oneOf(["initial", "italic"]),
  transform: PropTypes.oneOf([
    "initial",
    "lowercase",
    "uppercase",
    "capitalize",
  ]),
  weight: PropTypes.oneOf(["initial", "bold"]),
}

Text.defaultProps = {
  align: "initial",
  color: "initial",
  component: "p",
  variant: "initial",
  transform: "initial",
  weight: "initial",
}

export default Text
