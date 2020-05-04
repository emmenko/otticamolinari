/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui";
import { Flex, Box } from "@theme-ui/components";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import Link from "./link";
import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";

const Header = () => {
  const { siteTitle } = useSiteMetadata();
  const { navigation: nav } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="header" sx={{ mb: [2, 3] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to="/"
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <Styled.h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
            <Styled.img src="/logo_400x100.png" sx={{ maxHeight: "48px" }} />
          </Styled.h1>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Flex
        sx={{
          boxSizing: `border-box`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <Box>
          <Link to="/#vieni-a-trovarci">Vieni a trovarci</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
