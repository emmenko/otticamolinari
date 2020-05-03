/** @jsx jsx */
import "typeface-ibm-plex-sans";
import React from "react";
import { Global } from "@emotion/core";
import { jsx, Styled, css } from "theme-ui";
import { Box } from "@theme-ui/components";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import CookieConsent from "./cookie-consent";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = (props: LayoutProps) => {
  const isClient = typeof window !== "undefined";
  return (
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
            fontSize: "0.875rem",
          },
          address: {
            fontSize: [1, 2],
          },
        })}
      />
      <SEO />
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
          sx={{ flex: "1 1 auto", variant: "styles.Main" }}
          className={props.className}
        >
          {props.children}
        </Box>
        <Footer />
        {isClient && <CookieConsent />}
      </Box>
    </Styled.root>
  );
};

export default Layout;
