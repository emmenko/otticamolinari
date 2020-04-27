import { graphql, useStaticQuery } from "gatsby"

type Props = {
  minimalBlogConfig: {
    externalLinks: {
      name: string
      url: string
    }[]
    navigation: {
      title: string
      slug: string
    }[]
  }
}

const useMinimalBlogConfig = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      minimalBlogConfig {
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
      }
    }
  `)

  return data.minimalBlogConfig
}

export default useMinimalBlogConfig
