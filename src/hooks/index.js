import { useStaticQuery, graphql } from "gatsby"

export function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return site.siteMetadata
}
