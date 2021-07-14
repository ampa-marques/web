import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PageLayout from "../components/PageLayout";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MdxRemote.Source;
  image?: string;
};

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed, ImageGallery };
const slugToPageContent = ((pageContents) => {
  let hash = {};
  pageContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPageContent());

export default function Page({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
  image,
}: Props) {
  const content = hydrate(source, { components });
  return (
    <PageLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
      image={image}
    >
      {content}
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPageContent().map((it) => "/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.page as string;
  const source = fs.readFileSync(slugToPageContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const mdxSource = await renderToString(content, { components, scope: data });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags ?? [],
      author: data.author,
      source: mdxSource,
      image: data.image,
    },
  };
};
