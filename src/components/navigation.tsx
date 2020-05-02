/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import Link from "./link";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
  }[];
};

const Navigation = (props: NavigationProps) => (
  <Flex
    as="nav"
    sx={{
      "> * + *": { ml: 3 },
      fontSize: [1, `18px`],
      ".active": { color: `heading` },
    }}
  >
    {props.nav.map((item) => (
      <div key={item.slug}>
        <Link activeClassName="active" to={item.slug}>
          {item.title}
        </Link>
      </div>
    ))}
  </Flex>
);

export default Navigation;
