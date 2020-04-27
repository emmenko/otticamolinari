/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import {
  Container,
  Text,
  Flex,
  Heading,
  Embed,
  Grid,
  Divider,
  Link,
} from "@theme-ui/components";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import Layout from "./layout";
import Title from "./title";
import Orari from "./orari";
import Contacts from "./contacts";
// @ts-ignore
import FragmentServizi from "../fragments/servizi.mdx";
// @ts-ignore
import MedicalCareSvg from "../files/svg/undraw_medical_care_movn.svg";
// @ts-ignore
import ProductTourSvg from "../files/svg/undraw_product_tour_foyt.svg";
// @ts-ignore
import YogaSvg from "../files/svg/undraw_yoga_248n.svg";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};
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
    <Flex sx={{ width: "100%", maxHeight: "xs", height: "100%" }}>
      <Styled.div
        as={props.image}
        height="auto"
        sx={{
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
    <Styled.div
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
    </Styled.div>
  );
};

const Homepage = ({ posts }: PostsProps) => {
  // const { basePath, blogPath } = useMinimalBlogConfig();
  const images = useStaticQuery(graphql`
    query GetHomepageImages {
      file(relativePath: { eq: "store-overview.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
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
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Styled.div
        as="section"
        sx={{
          mt: [3, 4],
          mb: [4, 5, 6],
          "> * + *": { mt: [6, 5] },
        }}
      >
        <MainSectionContainer
          title="COVID-19"
          titleColorTheme="covid19.heading"
          image={MedicalCareSvg}
          imagePosition="left"
          sx={{
            backgroundColor: "covid19.background",
            borderRadius: 4,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <Container
            sx={{
              mt: 4,
              p: { mt: 3, fontSize: ".8rem", color: "covid19.text" },
            }}
          >
            <Text as="p">
              Per rendere sicuro l’accesso in negozio e limitare l’attesa, Vi
              consigliamo di prendere appuntamento per qualsiasi necessità ai
              numeri:
            </Text>
            <Text as="p">
              <abbr title="Telefono">Tel: </abbr>
              <Styled.a
                href="tel:0422582347"
                sx={{ color: "covid19.text", fontWeight: "bold" }}
              >
                0422 582347
              </Styled.a>
              <br />
              <abbr title="Cellulare">Cell: </abbr>
              <Styled.a
                href="tel:3385910882"
                sx={{ color: "covid19.text", fontWeight: "bold" }}
              >
                338 5910882
              </Styled.a>
            </Text>
            <Text as="p">Al momento siamo aperti con i seguenti orari:</Text>
            <Orari sx={{ color: "covid19.text" }} />
            <Text as="p">
              Vi ricordiamo che l'ingresso in negozio è possibile con
              mascherina, guanti e solo una persona adulta alla volta in assenza
              di febbre, tosse o positività al COVID-19.
              <br />
              I minori di anni 14 possono essere accompagnati.
              <br />
              Vi ringraziamo per la collaborazione.
            </Text>
          </Container>
        </MainSectionContainer>
        <MainSectionContainer
          title="La lente personalizzata per una corretta visione"
          description="Lasciati consigliare le migliori lenti per una visione più nitida, anche di sera, grazie al nuovo strumento ZEISS i.Profiler®plus"
          image={ProductTourSvg}
          imagePosition="right"
        />
        <MainSectionContainer
          title="Stile e benessere visivo"
          description="Optometria comportamentale, Visione e Postura, Training Visivo, Sport Vision, Contattologia, Ipovisione."
          image={YogaSvg}
          imagePosition="left"
        />
        <Embed
          src="//player.vimeo.com/video/101507282?title=0&byline=0&portrait=0&color=ffffff"
          sx={{ mt: [6, 5] }}
        />
      </Styled.div>
      <Styled.div
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
          <Styled.p>
            <Link as={GatsbyLink} to="/servizi">
              Leggi tutte le informazioni sui servizi
            </Link>
          </Styled.p>
        </Flex>
      </Styled.div>
      <Styled.div
        as="section"
        sx={{
          mb: [5, 5, 6],
        }}
      >
        <Title text="Vieni a trovarci" />
        <Styled.div
          sx={{
            mb: [3, 4],
          }}
        >
          <Embed src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6284.936046488591!2d12.23961778659644!3d45.6644168713948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe76e4ef43b6bd7e7!2sOttica%20Molinari!5e0!3m2!1sen!2sde!4v1587999826384!5m2!1sen!2sde" />
        </Styled.div>
        <Flex
          sx={{
            mb: [3, 4],
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Styled.p>
            L'Ottica Molinari è situata in centro storico a Treviso, facilmente
            raggiungibile a piedi (5min dalla stazione) o in auto (la piazza
            offre possibilità di parcheggio).
          </Styled.p>
          <Styled.p>Al momento siamo aperti con i seguenti orari:</Styled.p>
          <Orari />
          <Styled.p>
            Per qualsiasi informazione non esitare a contattarci:
          </Styled.p>
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
          <Styled.p>
            <Link as={GatsbyLink} to="/negozio">
              Le origini e il successo dell'Ottica Molinari
            </Link>
          </Styled.p>
        </Flex>
        <Styled.div
          sx={{
            mb: [3, 4],
          }}
        >
          <GatsbyImage fluid={images.file.childImageSharp.fluid} />
        </Styled.div>
        <Grid gap={[3, 4]} width={[150, 250]}>
          {images.allFile.nodes.map((node) => (
            <GatsbyImage key={node.id} fluid={node.childImageSharp.fluid} />
          ))}
        </Grid>
      </Styled.div>
    </Layout>
  );
};

export default Homepage;
