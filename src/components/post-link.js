import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    &bull; <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>{" "}
    <sup className="sup">{post.frontmatter.date}</sup>
  </div>
)
export default PostLink
