import React from "react"
import { graphql } from "gatsby"

const Post = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => (
  <>
    <h1>{frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
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
