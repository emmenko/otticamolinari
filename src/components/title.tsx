/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";

type TitleProps = {
  children?: React.ReactNode;
  as?: string;
  className?: string;
  text: string;
};

// const Title = ({ text, children, as = `h2`, className }: TitleProps) => (
const Title = (props: TitleProps) => (
  <Flex
    sx={{
      justifyContent: `space-between`,
      alignItems: `center`,
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
      mb: 4,
      flexFlow: `wrap`,
      boxSizing: `border-box`,
    }}
  >
    <Box
      as="h2"
      sx={{
        fontWeight: `medium`,
        fontSize: [3, 4],
        fontFamily: `heading`,
        lineHeight: `heading`,
        color: `heading`,
      }}
      className={props.className}
    >
      {props.text}
    </Box>
    <Box
      sx={{
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
      }}
    >
      {props.children}
    </Box>
  </Flex>
);

export default Title;
