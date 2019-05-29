import React from "react"
import { graphql } from "gatsby"
import { Article } from "./styles"
import Layout from "./../layout"

const Post = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => (
  <Layout>
    <Article>
      <h1>{frontmatter.title} ho!</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Article>
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
