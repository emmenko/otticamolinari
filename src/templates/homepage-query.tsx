import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    servizi: allPage(filter: { slug: { glob: "/servizi/*" } }) {
      nodes {
        slug
        title
      }
    }
  }
`
