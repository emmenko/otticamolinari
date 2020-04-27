/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";
import Link from "./link";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
  }[];
};

const Navigation = (props: NavigationProps) => (
  <Box
    as="nav"
    sx={{
      "> * + *": { ml: 3 },
      fontSize: [1, `18px`],
      ".active": { color: `heading` },
    }}
  >
    {props.nav.map((item) => (
      <Link key={item.slug} activeClassName="active" to={item.slug}>
        {item.title}
      </Link>
    ))}
  </Box>
);

export default Navigation;
