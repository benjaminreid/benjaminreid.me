const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(({ data: { allMarkdownRemark } }) => {
      allMarkdownRemark.edges.forEach(({ node: { frontmatter } }) => {
        createPage({
          path: `posts/${frontmatter.slug}`,
          component: path.resolve("./src/components/post.js"),
          context: {
            slug: frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
