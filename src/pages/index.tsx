/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import {
  Container,
  Box,
  Text,
  Flex,
  Heading,
  Embed,
  Grid,
  Divider,
} from "@theme-ui/components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../components/link";
import Layout from "../components/layout";
import Title from "../components/title";
import Orari from "../components/orari";
import Contacts from "../components/contacts";
// @ts-ignore
import FragmentServizi from "../fragments/servizi.mdx";
// @ts-ignore
import MedicalCareSvg from "../files/svg/undraw_medical_care_movn.svg";
// @ts-ignore
import ProductTourSvg from "../files/svg/undraw_product_tour_foyt.svg";
// @ts-ignore
import YogaSvg from "../files/svg/undraw_yoga_248n.svg";

const EyeShakerVideo = () => (
  <Embed src="//player.vimeo.com/video/433663520?title=0&byline=0&portrait=0&color=ffffff" />
);

type SectionContainerProps = {
  title: string;
  titleColorTheme?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  image: React.ComponentType;
  imagePosition: "left" | "right";
  sx?: React.CSSProperties;
  className?: string;
};

const MainSectionContainer = (props: SectionContainerProps) => {
  const left = (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading sx={{ fontSize: [4, 5], color: props.titleColorTheme }}>
        {props.title}
      </Heading>
      {props.description && (
        <Text as="p" sx={{ fontSize: 2, mt: 3 }}>
          {props.description}
        </Text>
      )}
      {props.children}
    </Flex>
  );
  const right = (
    <Flex
      sx={{
        width: ["100%", "auto"],
        minHeight: ["250px"],
        maxHeight: ["unset", "xs"],
        height: "100%",
      }}
    >
      <Box
        as={props.image}
        // @ts-ignore: the `height` prop is passed to the image component
        height="auto"
        sx={{
          mt: [4, 0, 0],
          '[data-fill="primary"]': {
            fill: "svg.primary",
          },
          '[data-fill="secondary"]': {
            fill: "svg.secondary",
          },
        }}
      />
    </Flex>
  );
  return (
    <Box
      sx={{
        display: ["flex", "grid"],
        flexDirection: [
          props.imagePosition === "left" ? "column-reverse" : "column",
          "unset",
        ],
        gap: 4,
        grid: ["unset", "auto / 1fr 1fr"],
        justifyContent: "center",
        alignItems: "center",
      }}
      className={props.className}
    >
      {props.imagePosition === "left" ? (
        <React.Fragment>
          {right}
          {left}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {left}
          {right}
        </React.Fragment>
      )}
    </Box>
  );
};

const Homepage = () => {
  const images = useStaticQuery(graphql`
    query GetHomepageImages {
      file(relativePath: { eq: "store-overview.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { in: "negozio" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Box
        as="section"
        sx={{
          // mt: [3, 4],
          mb: [4, 5, 6],
        }}
      >
        <MainSectionContainer
          title="La lente personalizzata per una corretta visione"
          description="Lasciati consigliare le migliori lenti per una visione più nitida, anche di sera, grazie al nuovo strumento ZEISS i.Profiler®plus"
          image={ProductTourSvg}
          imagePosition="right"
          sx={{ mt: [5, 6] }}
        />
        <MainSectionContainer
          title="Stile e benessere visivo"
          description="Optometria comportamentale, Visione e Postura, Training Visivo, Sport Vision, Contattologia, Ipovisione."
          image={YogaSvg}
          imagePosition="left"
          sx={{ mt: [5, 6] }}
        />
        <Embed
          src="//player.vimeo.com/video/101507282?title=0&byline=0&portrait=0&color=ffffff"
          sx={{ mt: [5, 6] }}
        />
        <MainSectionContainer
          title="EYESHAKER"
          description="Scopri il nuovo modo di pulire gli occhiali con il prodotto EYESHAKER, testato da ZEISS."
          image={EyeShakerVideo}
          imagePosition="left"
          sx={{ mt: [5, 6] }}
        />
      </Box>
      <Box
        as="section"
        sx={{
          mb: [5, 5, 6],
        }}
      >
        <Title text="Servizi" />
        <FragmentServizi />
        <Flex
          sx={{
            mb: [3, 4],
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Themed.p>
            <Link to="/servizi">Leggi tutte le informazioni sui servizi</Link>
          </Themed.p>
        </Flex>
      </Box>
      <Box
        as="section"
        sx={{
          mb: [5, 5, 6],
        }}
      >
        <Title id="vieni-a-trovarci" text="Vieni a trovarci" />
        <Box sx={{ mb: [3, 4] }}>
          <Embed src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6284.936046488591!2d12.23961778659644!3d45.6644168713948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe76e4ef43b6bd7e7!2sOttica%20Molinari!5e0!3m2!1sen!2sde!4v1587999826384!5m2!1sen!2sde" />
        </Box>
        <Flex
          sx={{
            mb: [3, 4],
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Themed.p>
            L'Ottica Molinari è situata in centro storico a Treviso, facilmente
            raggiungibile a piedi (5min dalla stazione) o in auto (la piazza
            offre possibilità di parcheggio).
          </Themed.p>
          <Orari />
          <Themed.p>
            Per qualsiasi informazione non esitare a contattarci:
          </Themed.p>
          <Contacts />
        </Flex>
        <Divider />
        <Flex
          sx={{
            mb: [3, 4],
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Themed.p>
            <Link to="/negozio">
              Le origini e il successo dell'Ottica Molinari
            </Link>
          </Themed.p>
        </Flex>
        <Box sx={{ mb: [3, 4] }}>
          <GatsbyImage
            alt=""
            image={images.file.childImageSharp.gastbyImageData}
          />
        </Box>
        <Grid gap={[3, 4]} columns={[1, 2]}>
          {images.allFile.nodes.map((node) => (
            <GatsbyImage
              key={node.id}
              alt=""
              image={node.childImageSharp.gastbyImageData}
            />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Homepage;
