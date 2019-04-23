import { useStaticQuery, graphql } from "gatsby"

export default function usePosts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
            html
            wordCount {
              words
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  return edges.map(edge => edge.node)
}
