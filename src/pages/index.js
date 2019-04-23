import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/use-posts"
import Layout from "../components/layout"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={`/posts/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
