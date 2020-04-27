/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import { Grid, Text } from "@theme-ui/components";

type Props = {
  sx?: SxStyleProp;
  className?: string;
};

const Orari = (props: Props) => (
  <Grid
    gap={0}
    columns="150px 1fr"
    sx={{
      fontSize: 1,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
    }}
    className={props.className}
  >
    <Text as="span">Lunedì</Text>
    <Text as="span">chiuso</Text>
    <Text as="span">Martedì</Text>
    <Text as="span">10:00 - 12:30</Text>
    <Text as="span">Mercoledì</Text>
    <Text as="span">10:00 - 12:30</Text>
    <Text as="span">Giovedì</Text>
    <Text as="span">16:00 - 19:00</Text>
    <Text as="span">Venerdì</Text>
    <Text as="span">10:00 - 12:30</Text>
    <Text as="span">Sabato</Text>
    <Text as="span">10:00 - 12:30</Text>
    <Text as="span">Domenica</Text>
    <Text as="span">chiuso</Text>
  </Grid>
);

export default Orari;
