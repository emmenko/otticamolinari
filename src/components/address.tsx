/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

const Address = () => (
  <address>
    <strong>Ottica Molinari</strong>
    <br />
    Piazza della Vittoria, 11
    <br />
    31100 Treviso (TV), Italy
    <br />
    <abbr title="Telefono">T:</abbr>{" "}
    <Themed.a href="tel:0422582347">0422 582347</Themed.a>
    <br />
    <Themed.a href="mailto:info@otticamolinari.it">
      info@otticamolinari.it
    </Themed.a>
  </address>
);

export default Address;
