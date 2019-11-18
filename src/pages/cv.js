import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Avatar from "@micalgenus/gatsby-plugin-github-avatar"
import { StateProvider } from "../context"

const Header = styled.header`
  display: flex;
  margin: 0 1rem 1rem;

  .avatar {
    align-self: flex-start;
    box-sizing: border-box;
    height: 130px;
    margin-right: 1rem;
    object-fit: contain;
    width: 130px;
  }

  .text {
    flex: 1 1 auto;

    .name {
      margin: 1.2rem 0 0.5rem;
    }
  }
`

const Footer = styled.footer`
  color: gray;
  font-size: 0.8rem;
  padding: 0 1rem 2rem;
  text-align: right;

  .find-out-more {
    visibility: hidden;
    float: left;

    a {
      font-weight: bold;
    }
  }

  .date {
    font-weight: bold;
  }
`

export default ({ data }) => {
  const { file, mdx } = data
  const { frontmatter, body } = mdx

  return (
    <StateProvider>
      <Layout exportPdf={true}>
        <SEO title="Cv" />
        <Header>
          <Avatar className="avatar" />
          <div className="text">
            <h1 className="name">{frontmatter.name}</h1>
            <p className="title">{frontmatter.title}</p>
            <hr />
          </div>
        </Header>
        <div className="body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        {Boolean(file) && (
          <Footer>
            <div className="find-out-more">
              Find out more at{" "}
              <a href="https://andrii.codes/?source=cv">andrii.codes</a>
            </div>
            Updated on <span className="date">{file.modifiedTime}</span>
          </Footer>
        )}
      </Layout>
    </StateProvider>
  )
}

export const data = graphql`
  query MDXQuery {
    mdx(fileAbsolutePath: { glob: "**/markdown-pages/cv.md" }) {
      body
      frontmatter {
        name
        title
        path
      }
    }

    file(absolutePath: { glob: "**/markdown-pages/cv.md" }) {
      modifiedTime(formatString: "MMMM DD, YYYY")
    }
  }
`
