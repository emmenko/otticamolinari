/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Cookies from "js-cookie";
import {
  Box,
  Flex,
  Button,
  Message,
  Text,
  Close,
  Heading,
} from "@theme-ui/components";
import Link from "./link";

const CookieConsent = () => {
  const [cookieConsentStatus, setCookieConsentStatus] = React.useState(
    Cookies.get("gdpr-analytics-enabled")
  );
  // Show the cookie consent only if there is no cookie status set
  const showCookieConsent =
    cookieConsentStatus !== "true" && cookieConsentStatus !== "false";
  const enableTracking = () => {
    Cookies.set("gdpr-analytics-enabled", "true", {
      expires: 365 * 2, // expire after 2 years
      sameSite: "strict",
    });
    // @ts-ignore
    window.trackGoogleAnalytics();
    setCookieConsentStatus("true");
  };
  const closeCookieConsent = () => {
    Cookies.set("gdpr-analytics-enabled", "false", {
      expires: 365 * 2, // expire after 2 years
      sameSite: "strict",
    });
    setCookieConsentStatus("false");
  };

  if (!showCookieConsent) return null;
  return (
    <Message
      variant="cookieConsent"
      sx={{
        "@keyframes slide-up": {
          from: {
            transform: "translate(0, 100px)",
          },
          to: {
            transform: "translate(0, 0)",
          },
        },
        bottom: [2, 3],
        left: [3, 4, "auto"],
        right: [3, "auto", "auto"],
        position: "fixed",
        maxWidth: ["100%", "calc(768px / 2)"],
        animation: "0.5s slide-up",
      }}
    >
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading as="h3" variant="messages.cookieConsent">
          {"Utilizzo di Cookies"}
        </Heading>
        <Close onClick={closeCookieConsent} />
      </Flex>
      <Box sx={{ mb: 2 }}>
        <Text as="p" sx={{ fontSize: 1, lineHeight: "heading" }}>
          {`Questo sito utilizza cookie tecnici ai fini di migliorare l'esperienza di navigazione sul sito. `}
        </Text>
      </Box>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/cookie-policy">Approfondisci</Link>
        <Button
          onClick={enableTracking}
          title="Consentisci l'utilizzo di Google Analytics"
          sx={{ mr: [1], color: "highlight" }}
        >
          {"Accetta Cookies"}
        </Button>
      </Flex>
    </Message>
  );
};

export default CookieConsent;
