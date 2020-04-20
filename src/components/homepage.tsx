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
} from "@theme-ui/components";
import { Link } from "gatsby";
import Layout from "./layout";
// @ts-ignore
import Hero from "../texts/hero";
// @ts-ignore
import Bottom from "../texts/bottom";
import Title from "./title";
import Listing from "./listing";
import List from "./list";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";
// @ts-ignore
import MedicalCareSvg from "../files/images/undraw_medical_care_movn.svg";
// @ts-ignore
import ProductTourSvg from "../files/images/undraw_product_tour_foyt.svg";
// @ts-ignore
import YogaSvg from "../files/images/undraw_yoga_248n.svg";

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
  image: React.ComponentType<{ height: string }>;
  imagePosition: "left" | "right";
  className?: string;
};

const SectionContainer = (props: SectionContainerProps) => {
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
    <Flex sx={{ width: "100%", maxHeight: "xs" }}>
      <props.image
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
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout>
      <section
        sx={{
          mb: [5, 6, 7],
          "> * + *": { mt: [6, 5] },
        }}
      >
        <SectionContainer
          title="COVID-19"
          titleColorTheme="covid19.heading"
          image={MedicalCareSvg}
          imagePosition="left"
          sx={{
            backgroundColor: "covid19.background",
            borderRadius: 4,
            paddingX: 2,
            paddingY: 4,
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
              <a
                href="tel:0422582347"
                sx={{ color: "covid19.text", fontWeight: "bold" }}
              >
                0422 582347
              </a>
              <br />
              <abbr title="Cellulare">Cell: </abbr>
              <a
                href="tel:3385910882"
                sx={{ color: "covid19.text", fontWeight: "bold" }}
              >
                338 5910882
              </a>
            </Text>
            <Text as="p">Al momento siamo aperti con i seguenti orari:</Text>
            <Grid
              gap={0}
              columns="150px 1fr"
              sx={{
                fontSize: 1,
                justifyContent: "center",
                alignItems: "center",
                color: "covid19.text",
                fontWeight: "bold",
              }}
            >
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
            </Grid>
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
        </SectionContainer>
        <SectionContainer
          title="La lente personalizzata per una corretta visione"
          description="Lasciati consigliare le migliori lenti per una visione più nitida, anche di sera, grazie al nuovo strumento ZEISS i.Profiler®plus"
          image={ProductTourSvg}
          imagePosition="right"
        />
        <SectionContainer
          title="Stile e benessere visivo"
          description="Optometria comportamentale, Visione e Postura, Training Visivo, Sport Vision, Contattologia, Ipovisione."
          image={YogaSvg}
          imagePosition="left"
        />
        <Embed
          src="//player.vimeo.com/video/101507282?title=0&byline=0&portrait=0&color=ffffff"
          sx={{ mt: [6, 5] }}
        />
      </section>
      {/* <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} /> */}
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
