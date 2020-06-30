/** @jsx jsx */
import React from "react";
import { jsx, SxStyleProp } from "theme-ui";
import { Grid, Text, Message } from "@theme-ui/components";

type Props = {
  sx?: SxStyleProp;
  className?: string;
};

const InlineGrid = (props) => (
  <Grid
    gap={[4, 0, 0, 4]}
    columns={["1fr 1fr", "1fr", "1fr", "1fr 1fr"]}
    sx={{
      fontSize: 1,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
    }}
  >
    {props.children}
  </Grid>
);

const Orari = (props: Props) => (
  <React.Fragment>
    <Grid
      gap={[1, 1, 0]}
      columns="150px 1fr"
      sx={{
        mt: 2,
        fontSize: 1,
        justifyContent: "center",
        alignItems: ["flex-start", "flex-start", "flex-start", "center"],
        fontWeight: "bold",
      }}
      className={props.className}
    >
      <Text as="span">Lunedì</Text>
      <Text as="span">chiuso</Text>
      <Text as="span">Martedì</Text>
      <InlineGrid>
        <Text as="span">10:00 - 12:30</Text>
        <Text as="span">16:00 - 19:00</Text>
      </InlineGrid>
      <Text as="span">Mercoledì</Text>
      <InlineGrid>
        <Text as="span">10:00 - 12:30</Text>
        <Text as="span">16:00 - 19:00</Text>
      </InlineGrid>
      <Text as="span">Giovedì</Text>
      <InlineGrid>
        <Text as="span">10:00 - 12:30</Text>
        <Text as="span">16:00 - 19:00</Text>
      </InlineGrid>
      <Text as="span">Venerdì</Text>
      <InlineGrid>
        <Text as="span">10:00 - 12:30</Text>
        <Text as="span">16:00 - 19:00</Text>
      </InlineGrid>
      <Text as="span">Sabato</Text>
      <InlineGrid>
        <Text as="span">10:00 - 12:30</Text>
        <Text as="span">16:00 - 19:00</Text>
      </InlineGrid>
      <Text as="span">Domenica</Text>
      <Text as="span">chiuso</Text>
    </Grid>
    <Message sx={{ mt: 2, fontSize: ".8rem" }}>
      Sabato pomeriggio chiuso durante i mesi di Luglio e Agosto
    </Message>
  </React.Fragment>
);

export default Orari;
