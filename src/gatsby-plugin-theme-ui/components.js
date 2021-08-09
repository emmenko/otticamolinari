/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Text, Message } from "@theme-ui/components";
import Title from "../components/title";
import Orari from "../components/orari";
import Address from "../components/address";
import Contacts from "../components/contacts";

const ContentMessage = (props) => (
  <Message {...props} variant="messages.content" />
);
const ListItem = (props) => {
  if (props.id && props.id.startsWith("fn-")) {
    const isHighlighted =
      typeof window !== "undefined" && window.location.hash === `#${props.id}`;
    // It's a footnote
    return (
      <Themed.li
        {...props}
        sx={{
          fontSize: "0.875rem !important",
          ...(isHighlighted
            ? {
                backgroundColor: "highlight",
              }
            : {}),
          a: { ml: 1 },
        }}
      />
    );
  }
  return <li {...props} />;
};

const components = {
  li: ListItem,
  // Custom components
  Text,
  Title,
  Orari,
  Address,
  Contacts,
  Message: ContentMessage,
};

export default components;
