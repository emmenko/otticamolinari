/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Flex, Text } from "@theme-ui/components";

const Contacts = () => (
  <Flex sx={{ flexDirection: "column" }}>
    <Text as="p">
      <abbr title="Mail">Mail: </abbr>
      <Themed.a href="mailto:info@otticamolinari.it">
        info@otticamolinari.it
      </Themed.a>
      <br />
      <abbr title="Telefono">Tel: </abbr>
      <Themed.a href="tel:0422582347">0422 582347</Themed.a>
      <br />
      <abbr title="Cellulare">Cell: </abbr>
      <Themed.a href="tel:3385910882">338 5910882</Themed.a>
    </Text>
  </Flex>
);

export default Contacts;
