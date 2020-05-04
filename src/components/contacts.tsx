/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex, Text } from "@theme-ui/components";

const Contacts = () => (
  <Flex sx={{ flexDirection: "column" }}>
    <Text as="p">
      <abbr title="Mail">Mail: </abbr>
      <Styled.a href="mailto:info@otticamolinari.it">
        info@otticamolinari.it
      </Styled.a>
      <br />
      <abbr title="Telefono">Tel: </abbr>
      <Styled.a href="tel:0422582347">0422 582347</Styled.a>
      <br />
      <abbr title="Cellulare">Cell: </abbr>
      <Styled.a href="tel:3385910882">338 5910882</Styled.a>
    </Text>
  </Flex>
);

export default Contacts;
