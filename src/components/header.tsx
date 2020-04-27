/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";
import replaceSlashes from "../utils/replaceSlashes";

const Header = () => {
  const { siteTitle } = useSiteMetadata();
  const { navigation: nav, externalLinks } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Styled.div as="header" sx={{ mb: [2, 3] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Styled.a
          as={Link}
          to="/"
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <Styled.h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
            <Styled.img src="/logo_400x100.png" sx={{ maxHeight: "48px" }} />
          </Styled.h1>
        </Styled.a>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Styled.div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
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
        {externalLinks && externalLinks.length > 0 && (
          <Styled.div
            sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}
          >
            {externalLinks.map((link) => (
              <Styled.a key={link.url} href={link.url}>
                {link.name}
              </Styled.a>
            ))}
          </Styled.div>
        )}
      </Styled.div>
    </Styled.div>
  );
};

export default Header;
