/* eslint react/prop-types: 0 */
import React from "react";
import { Text, Message } from "@theme-ui/components";
import Title from "../components/title";
import Orari from "../components/orari";
import Address from "../components/address";
import Contacts from "../components/contacts";

export default {
  Text,
  Title,
  Orari,
  Address,
  Contacts,
  Message: (props) => <Message {...props} variant="messages" />,
  wrapper: ({ children }) => <>{children}</>,
};
