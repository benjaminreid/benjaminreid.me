import React from "react"
import { graphql } from "gatsby"
import { Article } from "./styles"

const Post = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => (
  <Article>
    <h1>{frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Article>
)

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Post
