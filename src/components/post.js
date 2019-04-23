import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const Post = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => (
  <Layout>
    <h1>{frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
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
