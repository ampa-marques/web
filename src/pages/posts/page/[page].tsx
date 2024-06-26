import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import Navigation from "../../../components/Navigation";
import PostList from "../../../components/PostList";
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/posts";
import { listTags, TagContent } from "../../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostsPage({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
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
                            <h1>Noticias</h1>
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

      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="h-section-global-spacing">
        <PostList posts={posts} tags={tags} pagination={pagination} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { page: string };
}) => {
  const tags = listTags();
  const page = parseInt(params.page, 10);
  const posts = listPostContent(page, config.posts_per_page);

  const pagination = {
    current: page,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);

  return {
    paths: [...Array(pages)].map((_, i) => ({
      params: { page: (i + 1).toString() },
    })),
    fallback: false,
  };
};
