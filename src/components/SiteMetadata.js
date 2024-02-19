import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
            developerName
            developerUrl
            twitterUsername
            facebookUsername
            instagramUsername
            linkedinUsername
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
