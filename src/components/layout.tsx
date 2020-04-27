import React from "react";
import { Global } from "@emotion/core";
import { Styled, css } from "theme-ui";
import { Box } from "@theme-ui/components";
import "typeface-ibm-plex-sans";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import CodeStyles from "../styles/code";
import SkipNavLink from "./skip-nav";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      // @ts-ignore
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
        figcaption: {
          textAlign: "center",
          fontSize: '0.875rem',
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        maxWidth: 1024,
        mx: "auto",
        p: 4,
        variant: "styles.Container",
      }}
    >
      <Header />
      <Box
        id="skip-nav"
        as="main"
        css={css({ ...CodeStyles, flex: "1 1 auto", variant: "styles.Main" })}
        className={className}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </Styled.root>
);

export default Layout;
