/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import {
  Link as HTMLLink,
  LinkProps as HTMLLinkProps,
} from "@theme-ui/components";

type LinkProps = HTMLLinkProps & GatsbyLinkProps<{}>;

const Link = (props: LinkProps) => <HTMLLink as={GatsbyLink} {...props} />;

export default Link;
