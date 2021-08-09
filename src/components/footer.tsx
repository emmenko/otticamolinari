/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import Link from "./link";

const Footer = () => {
  const { externalLinks } = useMinimalBlogConfig();
  return (
    <Flex
      as="footer"
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        mb: [2],
        color: `secondary`,
        a: {
          variant: `links.navigation`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          mb: [3, 3, 0],
        }}
      >
        <Box>Copyright &copy; Ottica Molinari {new Date().getFullYear()}</Box>
        <Box>P.IVA 00804150266</Box>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          mb: [3, 3, 0],
        }}
      >
        <Box
          sx={{
            display: ["block", "flex"],
            justifyContent: "flex-end",
            mb: [2, 0, 0],
            "> * + *": {
              ml: [0, "8px"],
              mt: ["8px", 0],
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
        </Box>
        <Box
          sx={{
            display: ["block", "flex"],
            justifyContent: "flex-end",
            "> * + *": {
              ml: [0, "8px"],
              mt: ["8px", 0],
            },
          }}
        >
          {externalLinks.map((link) => (
            <Box key={link.url}>
              <Themed.a href={link.url} rel="noopener noreferrer">
                {link.name}
              </Themed.a>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
