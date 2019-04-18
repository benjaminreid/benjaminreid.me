import React from "react"
import usePosts from "../hooks/use-posts"
import Layout from "../components/layout"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      {posts.map((post, index) => (
        <div key={index}>{post.frontmatter.title}</div>
      ))}
    </Layout>
  )
}

export default IndexPage
