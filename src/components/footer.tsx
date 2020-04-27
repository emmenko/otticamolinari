/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import Link from "./link";

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      mb: [4],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`,
    }}
  >
    <div>
      Copyright &copy; Ottica Molinari {new Date().getFullYear()}
      <div>P.IVA 00804150266</div>
    </div>
    <Flex
      sx={{
        "> * + *": {
          marginLeft: "8px",
        },
      }}
    >
      <Box>
        <Link aria-label="Link to Referenze" to="/referenze">
          Referenze
        </Link>
      </Box>
      <Box>
        <Link aria-label="Link to Impressum" to="/impressum">
          Impressum
        </Link>
      </Box>
      <Box>
        <Link aria-label="Link to Cookie Policy" to="/cookie-policy">
          Cookie Policy
        </Link>
      </Box>
      <Box>
        <Link aria-label="Link to Privacy Policy" to="/privacy-policy">
          Privacy Policy
        </Link>
      </Box>
    </Flex>
  </Flex>
);

export default Footer;
