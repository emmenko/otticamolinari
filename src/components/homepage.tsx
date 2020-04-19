/** @jsx jsx */
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
import MedicalCareSvg from "../files/images/undraw_medical_care_movn.svg";
import ProductTourSvg from "../files/images/undraw_product_tour_foyt.svg";
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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout>
      <section
        sx={{
          mb: [5, 6, 7],
          // p: { fontSize: [1, 2, 3], mt: 2 },
          "> * + *": { mt: [6, 5] },
        }}
      >
        <Styled.div
          // gap={2}
          // columns="1fr 1fr"
          sx={{
            display: ["flex", "grid"],
            flexDirection: ["column-reverse", "unset"],
            gap: 4,
            grid: ["unset", "auto / 1fr 1fr"],
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "covid19.background",
            borderRadius: 4,
            paddingX: 2,
            paddingY: 4,
          }}
        >
          <Flex sx={{ width: ["100%"] }}>
            <MedicalCareSvg height="auto" sx={{ "*": { fill: "svg" } }} />
          </Flex>
          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ color: "covid19.heading" }}>COVID-19</Heading>
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
                columns={[2, "100px 1fr"]}
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
                mascherina, guanti e solo una persona adulta alla volta in
                assenza di febbre, tosse o positività al COVID-19.
                <br />
                I minori di anni 14 possono essere accompagnati.
                <br />
                Vi ringraziamo per la collaborazione.
              </Text>
            </Container>
          </Flex>
        </Styled.div>
        <Styled.div
          // gap={2}
          // columns="1fr 1fr"
          sx={{
            display: ["flex", "grid"],
            flexDirection: ["column", "unset"],
            gap: 4,
            grid: ["unset", "auto / 1fr 1fr"],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ fontSize: [4, 5] }}>
              La lente personalizzata per una corretta visione
            </Heading>
            <Text
              as="p"
              sx={{
                fontSize: 2,
                mt: 3,
                // fontWeight: "bold",
              }}
            >
              Lasciati consigliare le migliori lenti per una visione più nitida,
              anche di sera, grazie al nuovo strumento ZEISS i.Profiler®plus
            </Text>
          </Flex>
          <Flex sx={{ width: ["100%"] }}>
            <ProductTourSvg height="auto" />
          </Flex>
        </Styled.div>
        <Styled.div
          // gap={2}
          // columns="1fr 1fr"
          sx={{
            display: ["flex", "grid"],
            flexDirection: ["column-reverse", "unset"],
            gap: 4,
            grid: ["unset", "auto / 1fr 1fr"],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex sx={{ width: ["100%"] }}>
            <YogaSvg height="auto" />
          </Flex>
          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ fontSize: [4, 5] }}>
              Stile e benessere visivo
            </Heading>
            <Text
              as="p"
              sx={{
                fontSize: 2,
                mt: 3,
                // fontWeight: "bold",
              }}
            >
              Optometria comportamentale, Visione e Postura, Training Visivo,
              Sport Vision, Contattologia, Ipovisione.
            </Text>
          </Flex>
        </Styled.div>
        {/* <Hero /> */}
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
