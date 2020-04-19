/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        Copyright &copy; Ottica Molinari {new Date().getFullYear()}
        <div>P.IVA 00804150266</div>
      </div>
      <div
        sx={{
          "> * + *": {
            marginLeft: "8px",
          },
        }}
      >
        <Styled.a as={Link} aria-label="Link to Referenze" to="/referenze">
          Referenze
        </Styled.a>
        <Styled.a as={Link} aria-label="Link to Impressum" to="/impressum">
          Impressum
        </Styled.a>
        <Styled.a
          as={Link}
          aria-label="Link to Cookie Policy"
          to="/cookie-policy"
        >
          Cookie Policy
        </Styled.a>
        <Styled.a
          as={Link}
          aria-label="Link to Privacy Policy"
          to="/privacy-policy"
        >
          Privacy Policy
        </Styled.a>
      </div>
    </footer>
  );
};

export default Footer;
