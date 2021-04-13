import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Head from "next/head";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import { GetStaticProps } from "next";
import config from "../lib/config";
import PostList from "../components/PostList";
import Navigation from "../components/Navigation";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  return (
    <div id="colibri">
      <Head>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <title>AMPA CEIP Primer Marqués del Túria – Todos somos AMPA</title>

        <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
        <link
          rel="stylesheet"
          id="extend_builder_-fonts-css"
          href="https://fonts.googleapis.com/css?family=Muli%3A200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7COpen+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%7CPlayfair+Display%3A400%2C400italic%2C700%2C700italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext"
          type="text/css"
          media="all"
        />

        <link rel="dns-prefetch" href="http://s.w.org/" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AMPA CEIP Primer Marqués del Túria » Feed"
          href="/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AMPA CEIP Primer Marqués del Túria » Comments Feed"
          href="/comments/feed/"
        />
        <link
          rel="https://api.w.org/"
          href="/wp-json/"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="/xmlrpc.php?rsd"
        />
        <link
          rel="wlwmanifest"
          type="application/wlwmanifest+xml"
          href="/wp-includes/wlwmanifest.xml"
        />
        <meta name="generator" content="WordPress 5.3.6" />
        <link rel="canonical" href="/" />
        <link rel="shortlink" href="/" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fkrisish-oo5s.localhost.run%2F"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fkrisish-oo5s.localhost.run%2F&format=xml"
        />

        <script src="./js/wp-emoji-release.min.js" type="text/javascript" />
        <script type="text/javascript" src="./js/jquery.js" />
        <script type="text/javascript" src="./js/jquery-migrate.min.js" />
        <script type="text/javascript" src="./js/imagesloaded.min.js" />
        <script type="text/javascript" src="./js/masonry.min.js" />
        <script type="text/javascript" src="./js/colibri.js" />
        <script type="text/javascript" src="./js/typed.js" />
        <script type="text/javascript" src="./js/jquery.fancybox.min.js" />
        <script type="text/javascript" src="./js/theme.js" />
        <script type="text/javascript" src="./js/wp-embed.min.js" />
        <link
          rel="stylesheet"
          id="extend-builder-css-css"
          href="./styles/theme.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="fancybox-css"
          href="./styles/jquery.fancybox.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="./styles/style.min.css"
          type="text/css"
          media="all"
        />


        <link
          rel="stylesheet"
          href="./styles/index.css"
          type="text/css"
          media="all"
        />
      </Head>
      {/* saved from url=(0052)/?cache-buster=1797 */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="site new-stacking-context" id="page-top">
        <a
          className="skip-link screen-reader-text"
          href="/?cache-buster=1797#content"
        >
          Skip to content{" "}
        </a>
        {/* dynamic header start */}
        <div
          data-colibri-id="137-h1"
          className="page-header style-1 style-local-137-h1 position-relative h-footer-parallax-header-class"
        >
          {/**/}
          <Navigation />
          <div
            data-colibri-id="137-h24"
            id="hero"
            className="h-section h-hero d-flex align-items-lg-center align-items-md-center align-items-center style-24 style-local-137-h24 position-relative"
          >
            <div className="background-wrapper">
              <div className="background-layer background-layer-media-container-lg">
                {/**/}
                <div className="overlay-layer">
                  <div
                    className="overlay-image-layer"
                    style={{
                      backgroundImage:
                        "linear-gradient(120deg, rgba(161, 140, 209, 0.8) 0%, rgba(251, 194, 235, 0.8) 100%)",
                    }}
                  />
                  <div
                    className="shape-layer"
                    style={{
                      backgroundImage: 'url("")',
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "invert(0%)",
                    }}
                  />
                </div>
              </div>
              <div className="background-layer background-layer-media-container-md">
                {/**/}
                <div className="overlay-layer">
                  <div
                    className="overlay-image-layer"
                    style={{
                      backgroundImage:
                        "linear-gradient(120deg, rgba(161, 140, 209, 0.8) 0%, rgba(251, 194, 235, 0.8) 100%)",
                    }}
                  />
                  <div
                    className="shape-layer"
                    style={{
                      backgroundImage: 'url("")',
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "invert(0%)",
                    }}
                  />
                </div>
              </div>
              <div className="background-layer background-layer-media-container">
                {/**/}
                <div className="overlay-layer">
                  <div
                    className="overlay-image-layer"
                    style={{
                      backgroundImage:
                        "linear-gradient(120deg, rgba(161, 140, 209, 0.8) 0%, rgba(251, 194, 235, 0.8) 100%)",
                    }}
                  />
                  <div
                    className="shape-layer"
                    style={{
                      backgroundImage: 'url("")',
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "invert(0%)",
                    }}
                  />
                </div>
              </div>
            </div>
            {/**/}
            <div
              className="h-section-grid-container h-navigation-padding h-section-boxed-container"
              style={{ paddingTop: "74px" }}
            >
              {/**/}
              <div
                data-colibri-id="137-h25"
                className="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-25 style-local-137-h25 position-relative"
              >
                {/**/}
                <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
                  {/**/}
                  <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-26-outer style-local-137-h26-outer">
                    <div
                      data-colibri-id="137-h26"
                      className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-26 style-local-137-h26 position-relative"
                    >
                      {/**/}
                      {/**/}
                      <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                        {/**/}
                        <div
                          data-colibri-id="137-h27"
                          className="h-global-transition-all h-heading style-27 style-local-137-h27 position-relative h-element"
                        >
                          {/**/}
                          {/**/}
                          <h1>AMPA CEIP Primer Marqués del Túria</h1>
                        </div>
                        <div
                          data-colibri-id="137-h28"
                          className="h-x-container style-28 style-local-137-h28 position-relative h-element"
                        >
                          {/**/}
                          <div className="h-x-container-inner style-dynamic-137-h28-group style-28-spacing style-local-137-h28-spacing">
                            <span className="h-button__outer style-29-outer style-local-137-h29-outer d-inline-flex h-element">
                              <a
                                h-use-smooth-scroll="true"
                                href="https://ampa-marques.web.app/"
                                data-colibri-id="137-h29"
                                className="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-29 style-local-137-h29 position-relative"
                              >
                                {/**/}
                                {/**/} <span>Asóciate</span>
                              </a>
                            </span>
                            <span className="h-button__outer style-30-outer style-local-137-h30-outer d-inline-flex h-element">
                              <a
                                h-use-smooth-scroll="true"
                                href="http://mestreacasa.gva.es/web/primermarquesdelturia"
                                data-colibri-id="137-h30"
                                className="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-30 style-local-137-h30 position-relative"
                              >
                                {/**/}
                                {/**/} <span>Web Colegio</span>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-scroll-to__outer d-flex justify-content-center h-down-arrow move-down-bounce style-318-outer style-local-137-h31-outer">
                <div
                  data-colibri-component="scrollto"
                  data-colibri-id="137-h31"
                  className="h-scroll-to__inner style-318 style-local-137-h31 position-relative"
                  data-loaded="true"
                >
                  {/**/}
                  <div
                    data-colibri-id="137-h34"
                    className="h-icon style-321 style-local-137-h34 position-relative h-element"
                  >
                    {/**/}
                    <span className="h-svg-icon h-icon__icon style-321-icon style-local-137-h34-icon">
                      {/*Icon by Font Awesome (https://fontawesome.com)*/}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="angle-down"
                        viewBox="0 0 1152 1896.0833"
                      >
                        <path d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L87 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dynamic header end */}
        <div
          className="page-content h-footer-parallax-content-class"
          style={{ marginBottom: "117px" }}
        >
          <div id="content" className="content">
            <div
              data-colibri-id="161-c1"
              className="style-174 style-local-161-c1 position-relative"
            >
              {/**/}
              <div
                data-colibri-component="section"
                data-colibri-id="161-c2"
                id="overlappable"
                className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-175 style-local-161-c2 position-relative"
              >
                {/**/}
                {/**/}
                <div className="h-section-grid-container h-section-boxed-container">
                  {/**/}
                  <div
                    data-colibri-id="161-c3"
                    className="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-2 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-2 style-176 style-local-161-c3 position-relative"
                  >
                    {/**/}
                    <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-2 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-2">
                      {/**/}
                      <div className="h-column h-column-container d-flex h-col-lg-3 h-col-md-3 h-col-12 style-177-outer style-local-161-c4-outer">
                        <div
                          data-colibri-id="161-c4"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-3 h-px-md-3 h-px-2 v-inner-lg-3 v-inner-md-3 v-inner-2 style-177 style-local-161-c4 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c5"
                              className="h-icon style-178 style-local-161-c5 position-relative h-element"
                            >
                              {/**/}
                              <a
                                href="/extraescolares"
                                h-use-smooth-scroll="true"
                              >
                                <span className="h-svg-icon h-icon__icon style-178-icon style-local-161-c5-icon">
                                  {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    id="dribbble"
                                    viewBox="0 0 1536 1896.0833"
                                  >
                                    <path d="M1024 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82T468 1265t-103 148l-15-11q184 150 418 150 132 0 256-52zM839 893q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5T280 1334q50-89 123.5-166.5T546 1043t130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zM732 681Q612 468 488 303q-138 65-234 186T126 761q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zM611 259q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65T909 739q25 53 44 95 2 5 6.5 17t7.5 17q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c6"
                              className="h-global-transition-all h-heading style-179 style-local-161-c6 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <a
                                href="/extraescolares"
                                h-use-smooth-scroll="true"
                              >
                                <h5>EXTRAESCOLARES</h5>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c7"
                              className="h-text h-text-component style-180 style-local-161-c7 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <div>
                                <p>Calendario de actividades y normas de uso</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-column h-column-container d-flex h-col-lg-3 h-col-md-3 h-col-12 style-177-outer style-local-161-c8-outer">
                        <div
                          data-colibri-id="161-c8"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-3 h-px-md-3 h-px-2 v-inner-lg-3 v-inner-md-3 v-inner-2 style-177 style-local-161-c8 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c9"
                              className="h-icon style-178 style-local-161-c9 position-relative h-element"
                            >
                              {/**/}
                              <span className="h-svg-icon h-icon__icon style-178-icon style-local-161-c9-icon">
                                {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="sun-o"
                                  viewBox="0 0 1792 1896.0833"
                                >
                                  <path d="M1472 896q0-117-45.5-223.5t-123-184-184-123T896 320t-223.5 45.5-184 123-123 184T320 896t45.5 223.5 123 184 184 123T896 1472t223.5-45.5 184-123 123-184T1472 896zm276 277q-4 15-20 20l-292 96v306q0 16-13 26-15 10-29 4l-292-94-180 248q-10 13-26 13t-26-13l-180-248-292 94q-14 6-29-4-13-10-13-26v-306l-292-96q-16-5-20-20-5-17 4-29l180-248L48 648q-9-13-4-29 4-15 20-20l292-96V197q0-16 13-26 15-10 29-4l292 94L870 13q9-12 26-12t26 12l180 248 292-94q14-6 29 4 13 10 13 26v306l292 96q16 5 20 20 5 16-4 29l-180 248 180 248q9 12 4 29z" />
                                </svg>
                              </span>
                            </div>
                            <div
                              data-colibri-id="161-c10"
                              className="h-global-transition-all h-heading style-179 style-local-161-c10 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <h5>MATINERA</h5>
                            </div>
                            <div
                              data-colibri-id="161-c11"
                              className="h-text h-text-component style-180 style-local-161-c11 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <div>
                                <p>
                                  Servicio de cuidado de niños de 8:00 a 9:00
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-column h-column-container d-flex h-col-lg-3 h-col-md-3 h-col-12 style-177-outer style-local-161-c12-outer">
                        <div
                          data-colibri-id="161-c12"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-3 h-px-md-3 h-px-2 v-inner-lg-3 v-inner-md-3 v-inner-2 style-177 style-local-161-c12 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c13"
                              className="h-icon style-178 style-local-161-c13 position-relative h-element"
                            >
                              {/**/}
                              <a
                                href="/comedor"
                                h-use-smooth-scroll="true"
                              >
                                <span className="h-svg-icon h-icon__icon style-178-icon style-local-161-c13-icon">
                                  {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    id="spoon"
                                    viewBox="0 0 1071.2946 1896.0833"
                                  >
                                    <path d="M704 528q0 145-57 243.5T495 907l45 821q2 26-16 45t-44 19H288q-26 0-44-19t-16-45l45-821q-95-37-152-135.5T64 528q0-128 42.5-249.5T224 78.5 384 0t160 78.5 117.5 200T704 528z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c14"
                              className="h-global-transition-all h-heading style-179 style-local-161-c14 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <a
                                href="/comedor"
                                h-use-smooth-scroll="true"
                              >
                                <h5>COMEDOR</h5>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c15"
                              className="h-text h-text-component style-180 style-local-161-c15 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <div>
                                <p>Menú mensual de comedor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-column h-column-container d-flex h-col-lg-3 h-col-md-3 h-col-12 style-181-outer style-local-161-c16-outer">
                        <div
                          data-colibri-id="161-c16"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-3 h-px-md-3 h-px-2 v-inner-lg-3 v-inner-md-3 v-inner-2 style-181 style-local-161-c16 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c17"
                              className="h-icon style-178 style-local-161-c17 position-relative h-element"
                            >
                              {/**/}
                              <a
                                href="/ampa/calendario"
                                h-use-smooth-scroll="true"
                              >
                                <span className="h-svg-icon h-icon__icon style-178-icon style-local-161-c17-icon">
                                  {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    id="calendar"
                                    viewBox="0 0 1672.2646 1896.0833"
                                  >
                                    <path d="M128 1664h288v-288H128v288zm352 0h320v-288H480v288zm-352-352h288V992H128v320zm352 0h320V992H480v320zM128 928h288V640H128v288zm736 736h320v-288H864v288zM480 928h320V640H480v288zm768 736h288v-288h-288v288zm-384-352h320V992H864v320zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448zm736 864h288V992h-288v320zM864 928h320V640H864v288zm384 0h288V640h-288v288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c18"
                              className="h-global-transition-all h-heading style-179 style-local-161-c18 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <a
                                href="/ampa/calendario"
                                h-use-smooth-scroll="true"
                              >
                                <h5>calendario</h5>
                              </a>
                            </div>
                            <div
                              data-colibri-id="161-c19"
                              className="h-text h-text-component style-180 style-local-161-c19 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <div>
                                <p>
                                  <span
                                    style={{
                                      color: "rgb(70, 112, 127)",
                                      fontFamily: '"Open Sans"',
                                      fontSize: "16px",
                                      fontWeight: 400,
                                    }}
                                  >
                                    Días festivos, y actividades programadas
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-colibri-component="section"
                data-colibri-id="161-c20"
                id="content"
                className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-201 style-local-161-c20 position-relative"
              >
                {/**/}
                {/**/}
                <div className="h-section-grid-container h-section-boxed-container">
                  {/**/}
                  <div
                    data-colibri-id="161-c21"
                    className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-2 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-202 style-local-161-c21 position-relative"
                  >
                    {/**/}
                    <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-2 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                      {/**/}
                      <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-203-outer style-local-161-c22-outer">
                        <div
                          data-colibri-id="161-c22"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-203 style-local-161-c22 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c23"
                              className="d-block style-204 style-local-161-c23 position-relative h-element"
                            >
                              {/**/}
                              <div className="h-image__frame-container-outer">
                                <div className="h-image__frame-container">
                                  {/**/}
                                  {/**/}
                                  <img src="./images/adorable-baby-beautiful-child-277149.jpg" className="wp-image-199 style-204-image style-local-161-c23-image" srcSet="./images/adorable-baby-beautiful-child-277149.jpg 640w, ./images/adorable-baby-beautiful-child-277149-200x300.jpg 200w" sizes="(max-width: 640px) 100vw, 640px" alt="" />

                                  <div className="h-image__frame h-image__frame_shadow h-hide-sm style-204-frameImage style-local-161-c23-frameImage" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-205-outer style-local-161-c24-outer">
                        <div
                          data-colibri-id="161-c24"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-205 style-local-161-c24 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c25"
                              className="h-global-transition-all h-heading style-206 style-local-161-c25 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <h3>¿Qué hacemos?</h3>
                            </div>
                            <div
                              data-colibri-id="161-c26"
                              className="h-lead h-text h-text-component style-207 style-local-161-c26 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <div>
                                <p>
                                  Somos un grupo de madres y padres que queremos
                                  aportar nuestro grano de arena en el entorno
                                  educativo de nuestros hijos.
                                </p>
                              </div>
                            </div>
                            <div
                              data-colibri-id="161-c27"
                              className="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-208 style-local-161-c27 position-relative"
                            >
                              {/**/}
                              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
                                {/**/}
                                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-209-outer style-local-161-c28-outer">
                                  <div
                                    data-colibri-id="161-c28"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-209 style-local-161-c28 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c29"
                                        className="h-icon style-210 style-local-161-c29 position-relative h-element"
                                      >
                                        {/**/}
                                        <span className="h-svg-icon h-icon__icon style-210-icon style-local-161-c29-icon">
                                          {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            id="dribbble"
                                            viewBox="0 0 1536 1896.0833"
                                          >
                                            <path d="M1024 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82T468 1265t-103 148l-15-11q184 150 418 150 132 0 256-52zM839 893q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5T280 1334q50-89 123.5-166.5T546 1043t130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zM732 681Q612 468 488 303q-138 65-234 186T126 761q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zM611 259q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65T909 739q25 53 44 95 2 5 6.5 17t7.5 17q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div
                                        data-colibri-id="161-c30"
                                        className="h-global-transition-all h-heading style-211 style-local-161-c30 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h5>Extraescolares</h5>
                                      </div>
                                      <div
                                        data-colibri-id="161-c31"
                                        className="h-text h-text-component style-212 style-local-161-c31 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <div>
                                          <p>
                                            Organizamos las actividades
                                            extraescolares en el centro
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-209-outer style-local-161-c32-outer">
                                  <div
                                    data-colibri-id="161-c32"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-209 style-local-161-c32 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c33"
                                        className="h-icon style-210 style-local-161-c33 position-relative h-element"
                                      >
                                        {/**/}
                                        <span className="h-svg-icon h-icon__icon style-210-icon style-local-161-c33-icon">
                                          {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            id="star-o"
                                            viewBox="0 0 1664 1896.0833"
                                          >
                                            <path d="M1137 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T301 1569q0-6 2-20l86-500L25 695Q0 668 0 647q0-37 56-46l502-73L783 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div
                                        data-colibri-id="161-c34"
                                        className="h-global-transition-all h-heading style-211 style-local-161-c34 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h5>Celebraciones</h5>
                                      </div>
                                      <div
                                        data-colibri-id="161-c35"
                                        className="h-text h-text-component style-212 style-local-161-c35 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <div>
                                          <p>
                                            Navidad, Fallas, Verano, todo
                                            momento es bueno para estrechar
                                            lazos
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-209-outer style-local-161-c36-outer">
                                  <div
                                    data-colibri-id="161-c36"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-209 style-local-161-c36 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c37"
                                        className="h-icon style-210 style-local-161-c37 position-relative h-element"
                                      >
                                        {/**/}
                                        <span className="h-svg-icon h-icon__icon style-210-icon style-local-161-c37-icon">
                                          {/*Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)*/}
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            id="comments"
                                            viewBox="0 0 512 545.5"
                                          >
                                            <path d="M32 112h320v256H197.5L122 428.5l-26 21V368H32V112zm32 32v192h64v46.5l54-43 4.5-3.5H320V144H64zm320 32h96v256h-64v81.5L314.5 432h-149l40-32h120l58.5 46.5V400h64V208h-64v-32z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div
                                        data-colibri-id="161-c38"
                                        className="h-global-transition-all h-heading style-211 style-local-161-c38 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h5>Soporte a familias</h5>
                                      </div>
                                      <div
                                        data-colibri-id="161-c39"
                                        className="h-text h-text-component style-212 style-local-161-c39 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <div>
                                          <p>
                                            Escuela de madres y padres, lista de
                                            email, WhatsApp…
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-209-outer style-local-161-c40-outer">
                                  <div
                                    data-colibri-id="161-c40"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-209 style-local-161-c40 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c41"
                                        className="h-icon style-210 style-local-161-c41 position-relative h-element"
                                      >
                                        {/**/}
                                        <span className="h-svg-icon h-icon__icon style-210-icon style-local-161-c41-icon">
                                          {/*Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)*/}
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            id="building"
                                            viewBox="0 0 512 545.5"
                                          >
                                            <path d="M64 80h384v416H272v-64h-32v64H64V80zm32 32v352h112v-64h96v64h112V112H96zm32 32h64v32h-64v-32zm96 0h64v32h-64v-32zm96 0h64v32h-64v-32zm-192 64h64v32h-64v-32zm96 0h64v32h-64v-32zm96 0h64v32h-64v-32zm-192 64h64v32h-64v-32zm96 0h64v32h-64v-32zm96 0h64v32h-64v-32zm-192 64h64v32h-64v-32zm96 0h64v32h-64v-32zm96 0h64v32h-64v-32zm-192 64h64v32h-64v-32zm192 0h64v32h-64v-32z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div
                                        data-colibri-id="161-c42"
                                        className="h-global-transition-all h-heading style-211 style-local-161-c42 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h5>Infraestructura</h5>
                                      </div>
                                      <div
                                        data-colibri-id="161-c43"
                                        className="h-text h-text-component style-212 style-local-161-c43 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <div>
                                          <p>
                                            Colaboramos con la mejora y
                                            mantenimiento del cole
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-colibri-component="section"
                data-colibri-id="161-c48"
                id="cta"
                className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-263 style-local-161-c48 position-relative"
              >
                {/**/}
                {/**/}
                <div className="h-section-grid-container h-section-boxed-container">
                  {/**/}
                  <div
                    data-colibri-id="161-c49"
                    className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-264 style-local-161-c49 position-relative"
                  >
                    {/**/}
                    <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                      {/**/}
                      <div className="h-column h-column-container d-flex h-col-lg h-col-md h-col-auto style-265-outer style-local-161-c50-outer">
                        <div
                          data-colibri-id="161-c50"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-2 style-265 style-local-161-c50 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c51"
                              className="h-global-transition-all h-heading style-266 style-local-161-c51 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <h2>Asociarte a la AMPA tiene muchas ventajas</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-267-outer style-local-161-c52-outer">
                        <div
                          data-colibri-id="161-c52"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-2 style-267 style-local-161-c52 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                            {/**/}
                            <div
                              data-colibri-id="161-c53"
                              className="h-x-container style-268 style-local-161-c53 position-relative h-element"
                            >
                              {/**/}
                              <div className="h-x-container-inner style-dynamic-161-c53-group style-268-spacing style-local-161-c53-spacing">
                                <span className="h-button__outer style-269-outer style-local-161-c54-outer d-inline-flex h-element">
                                  <a
                                    h-use-smooth-scroll="true"
                                    href="http://ampa-marques.web.app/"
                                    data-colibri-id="161-c54"
                                    className="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-269 style-local-161-c54 position-relative"
                                  >
                                    {/**/}
                                    {/**/} <span>Asóciate</span>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-colibri-component="section"
                data-colibri-id="161-c55"
                id="custom"
                className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-286 style-local-161-c55 position-relative"
              >
                {/**/}
                {/**/}
                <div className="h-section-grid-container h-section-boxed-container">
                  <div
                    data-colibri-id="161-c71"
                    className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-303 style-local-161-c71 position-relative"
                  >
                    {/**/}
                    <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                      {/**/}
                      <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-304-outer style-local-161-c72-outer">
                        <div
                          data-colibri-id="161-c72"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-304 style-local-161-c72 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                            {/**/}
                            <div
                              data-colibri-id="161-c73"
                              className="h-global-transition-all h-heading style-305 style-local-161-c73 position-relative h-element"
                            >
                              {/**/}
                              {/**/}
                              <h2>Noticias</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-colibri-id="161-c56"
                    className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-287 style-local-161-c56 position-relative"
                  >
                    <PostList
                      posts={posts}
                      tags={tags}
                      pagination={pagination}
                    />
                  </div>
                </div>
              </div>
              <div
                data-colibri-component="section"
                data-colibri-id="161-c74"
                id="contact"
                className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-307 style-local-161-c74 position-relative"
              >
                <div className="background-wrapper">
                  <div className="background-layer background-layer-media-container-lg">
                    {/**/}
                    <div className="overlay-layer">
                      <div
                        className="overlay-image-layer"
                        style={{
                          backgroundColor: "rgb(23, 37, 42)",
                          opacity: "0.5",
                        }}
                      />
                      <div
                        className="shape-layer"
                        style={{
                          backgroundImage: 'url("")',
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          filter: "invert(0%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="background-layer background-layer-media-container-md">
                    {/**/}
                    <div className="overlay-layer">
                      <div
                        className="overlay-image-layer"
                        style={{
                          backgroundColor: "rgb(23, 37, 42)",
                          opacity: "0.5",
                        }}
                      />
                      <div
                        className="shape-layer"
                        style={{
                          backgroundImage: 'url("")',
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          filter: "invert(0%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="background-layer background-layer-media-container">
                    {/**/}
                    <div className="overlay-layer">
                      <div
                        className="overlay-image-layer"
                        style={{
                          backgroundColor: "rgb(23, 37, 42)",
                          opacity: "0.5",
                        }}
                      />
                      <div
                        className="shape-layer"
                        style={{
                          backgroundImage: 'url("")',
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          filter: "invert(0%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/**/}
                <div className="h-section-grid-container h-section-boxed-container">
                  {/**/}
                  <div
                    data-colibri-id="161-c75"
                    className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-2 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-308 style-local-161-c75 position-relative"
                  >
                    {/**/}
                    <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-2 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                      {/**/}
                      <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-309-outer style-local-161-c76-outer">
                        <div
                          data-colibri-id="161-c76"
                          className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-309 style-local-161-c76 position-relative"
                        >
                          {/**/}
                          {/**/}
                          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                            {/**/}
                            <div
                              data-colibri-id="161-c77"
                              className="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-310 style-local-161-c77 position-relative"
                            >
                              {/**/}
                              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
                                {/**/}
                                <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-311-outer style-local-161-c78-outer">
                                  <div
                                    data-colibri-id="161-c78"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-311 style-local-161-c78 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c79"
                                        className="h-global-transition-all h-heading style-312 style-local-161-c79 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h4>Contacta con nosotros</h4>
                                      </div>
                                      <div
                                        data-colibri-id="161-c80"
                                        className="h-icon style-313 style-local-161-c80 position-relative h-element"
                                      >
                                        {/**/}
                                        <span className="h-svg-icon h-icon__icon style-313-icon style-local-161-c80-icon">
                                          {/*Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)*/}
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            id="comments"
                                            viewBox="0 0 512 545.5"
                                          >
                                            <path d="M32 112h320v256H197.5L122 428.5l-26 21V368H32V112zm32 32v192h64v46.5l54-43 4.5-3.5H320V144H64zm320 32h96v256h-64v81.5L314.5 432h-149l40-32h120l58.5 46.5V400h64V208h-64v-32z" />
                                          </svg>
                                        </span>
                                      </div>
                                      <div
                                        data-colibri-id="161-c81"
                                        className="h-global-transition-all h-heading style-314 style-local-161-c81 position-relative h-element"
                                      >
                                        {/**/}
                                        {/**/}
                                        <h5>
                                          Mándanos un email o utiliza los
                                          formularios en esta web
                                        </h5>
                                      </div>
                                      <div
                                        data-colibri-id="161-c82"
                                        className="style-315 style-local-161-c82 position-relative h-element"
                                      >
                                        {/**/}
                                        <div className="d-flex flex-wrap h-social-icons justify-content-lg-center justify-content-md-center justify-content-center">
                                          <div className="social-icon-container d-inline-flex">
                                            <div className="icon-container h-social-icon h-global-transition">
                                              <div
                                                className="h-icon-svg"
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                }}
                                              >
                                                {/*Icon by Font Awesome (https://fontawesome.com)*/}
                                                <svg
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  id="facebook-square"
                                                  viewBox="0 0 1536 1896.0833"
                                                >
                                                  <path d="M1248 128q119 0 203.5 84.5T1536 416v960q0 119-84.5 203.5T1248 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T820 666v171H620v232h200v595H288q-119 0-203.5-84.5T0 1376V416q0-119 84.5-203.5T288 128h960z" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="social-icon-container d-inline-flex">
                                            <a
                                              href="mailto://ampa@primermarques.com"
                                              h-use-smooth-scroll="true"
                                            >
                                              <div className="icon-container h-social-icon h-global-transition">
                                                <div
                                                  className="h-icon-svg"
                                                  style={{
                                                    width: "100%",
                                                    height: "100%",
                                                  }}
                                                >
                                                  {/*Icon by Socicon (http://www.socicon.com)*/}
                                                  <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 1500 1500"
                                                  >
                                                    <path d="M799.805 922.852c-14.648 11.719-32.227 20.508-49.805 20.508s-35.156-8.789-49.805-20.508l-700.195-571.289v899.414h1500v-899.414zM750 750c14.648 0 29.297-5.859 41.016-14.648l594.727-486.328h-1271.484l594.727 486.328c11.719 8.789 26.367 14.648 41.016 14.648z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-316-outer style-local-161-c83-outer">
                                  <div
                                    data-colibri-id="161-c83"
                                    className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-316 style-local-161-c83 position-relative"
                                  >
                                    {/**/}
                                    {/**/}
                                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                                      {/**/}
                                      <div
                                        data-colibri-id="161-c84"
                                        className="style-317 style-local-161-c84 position-relative h-element"
                                      >
                                        {/**/}
                                        <div className="h-global-transition-all h-contact-form-shortcode h-global-transition h-global-transition-all">
                                          <form name="contact" method="POST" data-netlify="true">
                                            <p>
                                              <label>Tu nombre: <input type="text" name="name" /></label>
                                            </p>
                                            <p>
                                              <label>Tu email: <input type="email" name="email" /></label>
                                            </p>
                                            {/* <p>
                                              <label>Your Role: <select name="role[]" multiple></label>
                                                <select name="role">
                                                <option value="leader">Leader</option>
                                                <option value="follower">Follower</option>
                                              </select>
                                            </p> */}
                                            <p>
                                              <label>Mensaje: <textarea name="message"></textarea></label>
                                            </p>
                                            <p>
                                              <button type="submit">Enviar</button>
                                            </p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* dynamic footer start */}
        <div
          data-enabled="true"
          data-colibri-component="footer-parallax"
          data-colibri-id="143-f1"
          className="page-footer style-59 style-local-143-f1 position-relative h-footer-parallax"
          data-loaded="true"
        >
          {/**/}
          <div
            data-colibri-component="section"
            data-colibri-id="143-f2"
            id="copyright"
            className="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-60 style-local-143-f2 position-relative"
          >
            {/**/}
            {/**/}
            <div className="h-section-grid-container h-section-boxed-container">
              {/**/}
              <div
                data-colibri-id="143-f3"
                className="h-row-container gutters-row-lg-1 gutters-row-md-1 gutters-row-2 gutters-row-v-lg-1 gutters-row-v-md-1 gutters-row-v-2 style-61 style-local-143-f3 position-relative"
              >
                {/**/}
                <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-1 gutters-col-md-1 gutters-col-2 gutters-col-v-lg-1 gutters-col-v-md-1 gutters-col-v-2">
                  {/**/}
                  <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-62-outer style-local-143-f4-outer">
                    <div
                      data-colibri-id="143-f4"
                      className="d-flex h-flex-basis h-column__inner h-px-lg-1 h-px-md-1 h-px-2 v-inner-lg-1 v-inner-md-1 v-inner-2 style-62 style-local-143-f4 position-relative"
                    >
                      {/**/}
                      {/**/}
                      <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                        {/**/}
                        <div
                          data-colibri-id="143-f5"
                          className="style-63 style-local-143-f5 position-relative h-element"
                        >
                          {/**/}
                          <div className="h-global-transition-all">
                            © 2021 AMPA CEIP Primer Marqués del Túria. Created
                            for free using WordPress and
                            <a target="_blank" href="https://colibriwp.com/">
                              Colibri
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resize-triggers">
            <div className="expand-trigger">
              <div style={{ width: "1441px", height: "118px" }} />
            </div>
            <div className="contract-trigger" />
          </div>
        </div>
        {/* dynamic footer end */}
      </div>
      {/* #page */}
      <div
        id="offcanvas-wrapper-137-h10"
        className="h-offcanvas-panel offcanvas offcanvas-right hide force-hide style-10-offscreen style-local-137-h10-offscreen"
      >
        <div
          data-colibri-id="137-h11"
          className="d-flex flex-column h-offscreen-panel style-11 style-local-137-h11 position-relative h-element"
        >
          {/**/}
          <div className="offscreen-header h-ui-empty-state-container">
            <div
              data-colibri-id="137-h13"
              className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-12 style-local-137-h13 position-relative"
            >
              {/**/}
              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                {/**/}
                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-13-outer style-local-137-h14-outer">
                  <div
                    data-colibri-id="137-h14"
                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-13 style-local-137-h14 position-relative"
                  >
                    {/**/}
                    {/**/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                      {/**/}
                      <div
                        data-colibri-id="137-h15"
                        className="d-flex align-items-center text-lg-center text-md-center text-center justify-content-lg-center justify-content-md-center justify-content-center style-14 style-local-137-h15 position-relative h-element"
                      >
                        {/**/}
                        <a
                          rel="home"
                          href="/"
                          h-use-smooth-scroll="true"
                          className="d-flex align-items-center"
                        >
                          <img
                            src="./images/AMPA_LOGO_VERSION_BLANCO.png"
                            className="h-logo__image h-logo__image_h logo-image style-14-image style-local-137-h15-image"
                            alt=""
                          />
                          <img
                            src="./images/AMPA_COLOR.jpg"
                            className="h-logo__alt-image h-logo__alt-image_h logo-alt-image style-14-image style-local-137-h15-image"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offscreen-content">
            {/**/}
            <div
              data-colibri-component="accordion-menu"
              role="navigation"
              h-use-smooth-scroll-all="true"
              data-colibri-id="137-h12"
              className="h-menu h-global-transition-all h-ignore-global-body-typography h-mobile-menu h-menu-accordion style-17 style-local-137-h12 position-relative h-element"
              data-loaded="true"
            >
              {/**/}
              <div className="h-global-transition-all h-mobile-menu">
                <div className="colibri-menu-container">
                  <ul id="menu-actividades-1" className="colibri-menu none ">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-274">
                      <a href="/ampa/">
                        AMPA
                        <div
                          data-skip-smooth-scroll={1}
                          className="arrow-wrapper arrow-right"
                        >
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="angle-right"
                            className="svg-inline--fa fa-angle-right fa-w-8"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                          >
                            <path
                              fill="currentColor"
                              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                            />
                          </svg>
                        </div>
                        <div
                          data-skip-smooth-scroll={1}
                          className="arrow-wrapper arrow-down"
                        >
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="angle-down"
                            className="svg-inline--fa fa-angle-down fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                            />
                          </svg>
                        </div>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-499">
                          <a href="/ampa/">
                            Acerca del AMPA
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-358">
                          <a href="/ampa/asociate/">
                            Asóciate
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-315">
                          <a href="/ampa/calendario/">
                            Calendario
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-275">
                      <a href="/extraescolares/">
                        Extraescolares
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-276">
                      <a href="/comedor/">
                        Comedor
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-277">
                      <a href="/colegio-2/">
                        Colegio
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-278">
                      <a href="/blog/">
                        Noticias
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382">
                      <a href="/contacto/">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="offscreen-footer h-ui-empty-state-container">
            <div
              data-colibri-id="137-h16"
              className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-15 style-local-137-h16 position-relative"
            >
              {/**/}
              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                {/**/}
                <div className="h-column h-column-container d-flex h-col-lg-6 h-col-md-6 h-col-12 style-16-outer style-local-137-h17-outer">
                  <div
                    data-colibri-id="137-h17"
                    className="d-flex h-flex-basis h-column__inner h-ui-empty-state-container h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-16 style-local-137-h17 position-relative"
                  >
                    {/**/}
                    {/**/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100">
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="offcanvas-overlay-137-h10"
        className="offscreen-overlay style-10-offscreenOverlay style-local-137-h10-offscreenOverlay"
      />
    </div>
  );
}
