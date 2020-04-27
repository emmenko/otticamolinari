/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Text, Flex, Button, Box } from "@theme-ui/components";
import Link from "./link";

const dismissedCookieKey = "cookieconsent_dismissed";
const cookieContainerId = "cookie-banner";

const CookieConsent = () => {
  const elementRef = React.useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    setIsVisible(!~document.cookie.indexOf(dismissedCookieKey));
  }, []);
  const acceptCookie = (event) => {
    document.cookie = `${dismissedCookieKey}=yes; expires=#{new Date('2099-12-31').toUTCString()}; path=/`;
    if (elementRef.current) {
      elementRef.current.remove();
    }
  };
  if (!isVisible) {
    return null;
  }
  return (
    <Box
      ref={elementRef}
      id={cookieContainerId}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        variant: "styles.CookieBanner",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: 0,
          maxWidth: 1024,
          mx: "auto",
          paddingX: 4,
          paddingY: 2,
        }}
      >
        <Text as="p">
          Questo sito utilizza cookie tecnici ai fini di migliorare l'esperienza
          di navigazione sul sito.{" "}
          <Link to="/cookie-policy">Approfondisci</Link>
        </Text>
        <Button onClick={acceptCookie}>OK</Button>
      </Flex>
    </Box>
  );
};

export default CookieConsent;
