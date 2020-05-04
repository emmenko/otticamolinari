/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";
import Layout from "../components/layout";

const PageNotFound = () => (
  <Layout>
    <Box as="h1" sx={{ fontFamily: "heading" }}>
      Pagina non disponibile
    </Box>
  </Layout>
);

export default PageNotFound;
