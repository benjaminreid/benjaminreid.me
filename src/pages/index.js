import React from "react"
import { Link } from "gatsby"
import usePosts from "../hooks/use-posts"

const IndexPage = ({ location }) => {
  const posts = usePosts()

  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={`/posts/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default IndexPage
