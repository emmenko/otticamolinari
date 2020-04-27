/* eslint react/prop-types: 0 */
import React from "react";
import { preToCodeBlock } from "mdx-utils";
import { Text, Message } from "@theme-ui/components";
import Code from "../components/code";
import Title from "../components/title";
import Orari from "../components/orari";
import Contacts from "../components/contacts";

export default {
  Text,
  Title,
  Orari,
  Contacts,
  Message: props => <Message {...props} variant="messages" />,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};
