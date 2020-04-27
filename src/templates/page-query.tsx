import { graphql } from "gatsby";
import PageComponent from "../components/page";

export default PageComponent;

export const query = graphql`
  query($slug: String!, $slugDirectoryGlob: String) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
    }
    subpages: allPage(
      filter: { slug: { glob: $slugDirectoryGlob } }
      sort: { fields: title }
    ) {
      nodes {
        slug
        title
        description
      }
    }
  }
`;
