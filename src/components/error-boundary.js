import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    window.Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    window.Sentry.captureException(error)
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return (
        <>
          <h1>Something went wrong!</h1>
          <p>Please come again later.</p>
        </>
      )
    } else {
      // when there's not an error, render children untouched
      return this.props.children
    }
  }
}
