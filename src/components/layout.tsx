/** @jsx jsx */
import "@fontsource/ibm-plex-sans/latin.css";
import "./global-styles.css";
import React from "react";
import { jsx, Themed } from "theme-ui";
import { Box } from "@theme-ui/components";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import CookieConsent from "./cookie-consent";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = (props: LayoutProps) => {
  const isClient = typeof window !== "undefined";
  return (
    <Themed.root data-testid="theme-root">
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
    </Themed.root>
  );
};

export default Layout;
