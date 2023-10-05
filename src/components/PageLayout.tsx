import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getTag } from "../lib/tags";
import Navigation from "./Navigation";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
  image?: string;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
  image,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  return (
    <Layout>
      <div
        data-colibri-id="140-h1"
        className="page-header style-31 style-local-140-h1 position-relative h-footer-parallax-header-class"
      >
        {/**/}
        <Navigation />
        <div
          data-colibri-id="140-h24"
          id="hero"
          className="h-section h-hero d-flex align-items-lg-center align-items-md-center align-items-center style-54 style-local-140-h24 position-relative"
        >
          <div className="background-wrapper">
            <div className="background-layer background-layer-media-container-lg">
              {/**/}
              <div className="overlay-layer">
                <div
                  className="overlay-image-layer"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", opacity: 70 }}
                />
                <div
                  className="shape-layer"
                  style={{
                    backgroundImage: 'url("")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
            <div className="background-layer background-layer-media-container-md">
              {/**/}
              <div className="overlay-layer">
                <div
                  className="overlay-image-layer"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", opacity: 70 }}
                />
                <div
                  className="shape-layer"
                  style={{
                    backgroundImage: 'url("")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
            <div className="background-layer background-layer-media-container">
              {/**/}
              <div className="overlay-layer">
                <div
                  className="overlay-image-layer"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", opacity: 70 }}
                />
                <div
                  className="shape-layer"
                  style={{
                    backgroundImage: 'url("")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
          </div>
          {/**/}
          <div
            className="h-section-grid-container h-navigation-padding h-section-boxed-container"
            style={{ paddingTop: "101px" }}
          >
            {/**/}
            <div
              data-colibri-id="140-h25"
              className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-55 style-local-140-h25 position-relative"
            >
              {/**/}
              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                {/**/}
                <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-56-outer style-local-140-h26-outer">
                  <div
                    data-colibri-id="140-h26"
                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-56 style-local-140-h26 position-relative"
                  >
                    {/**/}
                    {/**/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                      {/**/}
                      <div
                        data-colibri-id="140-h27"
                        className="page-title style-57 style-local-140-h27 position-relative h-element"
                      >
                        {/**/}
                        <div className="h-global-transition-all">
                          <span>
                            <h1>{title}</h1>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BasicMeta
        url={`/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/${slug}`}
        title={title}
        description={description}
        image={image}
      />
      <JsonLdMeta
        url={`/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        description={description}
      />
      <div className={"container"}>
        <article className="text-left">
          <div className={styles.content}>{children}</div>
        </article>
        <footer>
          <div className={"social-list"}>
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
          .container {
            display: block;
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5rem;
            box-sizing: border-box;
            text-align: center;
          }
          .metadata div {
            display: inline-block;
            margin-right: 0.5rem;
          }
          article {
            flex: 1 0 auto;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 2.25rem;
          }
          .tag-list {
            list-style: none;
            text-align: right;
            margin: 1.75rem 0 0 0;
            padding: 0;
          }
          .tag-list li {
            display: inline-block;
            margin-left: 0.5rem;
          }
          .social-list {
            margin-top: 3rem;
            text-align: center;
          }

          @media (min-width: 769px) {
            .container {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          /* Syntax highlighting */
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata,
          .token.plain-text {
            color: #6a737d;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword,
          .token.operator {
            color: #d73a49;
          }

          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #22863a;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #032f62;
          }

          .token.function,
          .token.class-name {
            color: #6f42c1;
          }

          /* language-specific */

          /* JSX */
          .language-jsx .token.punctuation,
          .language-jsx .token.tag .token.punctuation,
          .language-jsx .token.tag .token.script,
          .language-jsx .token.plain-text {
            color: #24292e;
          }

          .language-jsx .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-jsx .token.tag .token.class-name {
            color: #005cc5;
          }

          .language-jsx .token.tag .token.script-punctuation,
          .language-jsx .token.attr-value .token.punctuation:first-child {
            color: #d73a49;
          }

          .language-jsx .token.attr-value {
            color: #032f62;
          }

          .language-jsx span[class="comment"] {
            color: pink;
          }

          /* HTML */
          .language-html .token.tag .token.punctuation {
            color: #24292e;
          }

          .language-html .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-html .token.tag .token.attr-value,
          .language-html
            .token.tag
            .token.attr-value
            .token.punctuation:not(:first-child) {
            color: #032f62;
          }

          /* CSS */
          .language-css .token.selector {
            color: #6f42c1;
          }

          .language-css .token.property {
            color: #005cc5;
          }
        `}
      </style>
    </Layout>
  );
}
