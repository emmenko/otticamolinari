/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Address = () => (
  <address>
    <strong>Ottica Molinari</strong>
    <br />
    Piazza della Vittoria, 11
    <br />
    31100 Treviso (TV), Italy
    <br />
    <abbr title="Telefono">T:</abbr>{" "}
    <Styled.a href="tel:0422582347">0422 582347</Styled.a>
    <br />
    <Styled.a href="mailto:info@otticamolinari.it">info@otticamolinari.it</Styled.a>
  </address>
);

export default Address;
