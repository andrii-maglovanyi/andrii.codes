import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { StateProvider } from "../context"

export default ({ data }) => {
  const { mdx } = data
  const { body } = mdx

  return (
    <StateProvider>
      <Layout>
        <SEO title="Home" />
        <div className="body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Layout>
    </StateProvider>
  )
}

export const data = graphql`
  query indexQuery {
    mdx(fileAbsolutePath: { glob: "**/markdown-pages/index.md" }) {
      body
      frontmatter {
        name
        title
      }
    }

    file(relativePath: { eq: "markdown-pages/index.md" }) {
      modifiedTime(formatString: "MMMM DD, YYYY")
    }
  }
`
