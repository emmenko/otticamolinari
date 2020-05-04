/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Text } from "@theme-ui/components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import Link from "./link";
import Title from "./title";
import SEO from "./seo";

type PageProps = {
  data: {
    page: {
      slug: string;
      title: string;
      excerpt: string;
      body: string;
    };
    subpages: {
      nodes: {
        slug: string;
        title: string;
        description?: string;
      }[];
    };
  };
};

const toWord = (str: string) =>
  str.replace(/-/g, " ").replace(/^[a-z]/, (char) => char.toUpperCase());

const Page = (props: PageProps) => {
  const breadcrumbs = props.data.page.slug.split("/").filter(Boolean);
  const areBreadcrumbsVisible = breadcrumbs.length > 1;

  return (
    <Layout>
      <SEO
        title={props.data.page.title}
        description={props.data.page.excerpt}
      />
      {breadcrumbs.map((crumb, index) => {
        const label = toWord(crumb);
        const isLast = index === breadcrumbs.length - 1;
        if (isLast) {
          return (
            <Text
              key={crumb}
              as="span"
              sx={{ visibility: areBreadcrumbsVisible ? "visible" : "hidden" }}
            >
              {label}
            </Text>
          );
        }
        const partialSlug = breadcrumbs.filter((_, i) => i <= index).join("/");
        return (
          <React.Fragment key={crumb}>
            <Link to={`/${partialSlug}`}>{label}</Link>
            <Styled.div as="span" sx={{ marginX: 2 }}>
              {"/"}
            </Styled.div>
          </React.Fragment>
        );
      })}
      <Styled.h1>{props.data.page.title}</Styled.h1>
      <Styled.div as="section" sx={{ my: 5 }}>
        <MDXRenderer>{props.data.page.body}</MDXRenderer>
      </Styled.div>
      {areBreadcrumbsVisible && (
        <Link to={`/${breadcrumbs.slice(0, -1).join("/")}`}>Indietro</Link>
      )}
      {props.data.subpages.nodes.length > 0 && (
        <React.Fragment>
          <Title
            text={`Informazioni sui servizi${
              areBreadcrumbsVisible ? ` di ${props.data.page.title}` : ""
            }`}
          />
          <ul>
            {props.data.subpages.nodes.map((page) => (
              <li key={page.slug}>
                <Link to={page.slug}>{page.title}</Link>
                {page.description && (
                  <Text as="span">{`: ${page.description}`}</Text>
                )}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Page;
