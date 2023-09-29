
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// import PostList from "../components/PostList";
import config from "../lib/config";
// import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import Head from "next/head";
import Navigation from "../components/Navigation";

type Props = {
    //   posts: PostContent[];
    //   tags: TagContent[];
    //   pagination: {
    //     current: number;
    //     pages: number;
    //   };
};
export default function Index() {
    const url = "/posts";
    const title = "All posts";
    return (
        <Layout>
            <div data-colibri-id="140-h1" className="page-header style-31 style-local-140-h1 position-relative h-footer-parallax-header-class">
                {/**/}
                <Navigation />
                <div data-colibri-id="140-h24" id="hero" className="h-section h-hero d-flex align-items-lg-center align-items-md-center align-items-center style-54 style-local-140-h24 position-relative">
                    <div className="background-wrapper">
                        <div className="background-layer background-layer-media-container-lg">
                            {/**/}
                            <div className="overlay-layer">
                                <div className="overlay-image-layer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 70 }} />
                                <div className="shape-layer" style={{ backgroundImage: 'url("")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                            </div>
                        </div>
                        <div className="background-layer background-layer-media-container-md">
                            {/**/}
                            <div className="overlay-layer">
                                <div className="overlay-image-layer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 70 }} />
                                <div className="shape-layer" style={{ backgroundImage: 'url("")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                            </div>
                        </div>
                        <div className="background-layer background-layer-media-container">
                            {/**/}
                            <div className="overlay-layer">
                                <div className="overlay-image-layer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 70 }} />
                                <div className="shape-layer" style={{ backgroundImage: 'url("")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                            </div>
                        </div>
                    </div>
                    {/**/}
                    <div className="h-section-grid-container h-navigation-padding h-section-boxed-container" style={{ paddingTop: '101px' }}>
                        {/**/}
                        <div data-colibri-id="140-h25" className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-55 style-local-140-h25 position-relative">
                            {/**/}
                            <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                                {/**/}
                                <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-56-outer style-local-140-h26-outer">
                                    <div data-colibri-id="140-h26" className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-56 style-local-140-h26 position-relative">
                                        {/**/}
                                        {/**/}
                                        <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                                            {/**/}
                                            <div data-colibri-id="140-h27" className="page-title style-57 style-local-140-h27 position-relative h-element">
                                                {/**/}
                                                <div className="h-global-transition-all"><span><h1>Comedor</h1></span></div>
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
                {/*<div className="h-section-grid-container h-section-boxed-container">
                    <form id="formulario" action="http://62.4.6.255/webapp/login.php" method="POST" target="_blank" style={{textAlign: "center"}}>
                      <input type="hidden" id="nombredeusuario" name="nombredeusuario" value="va3048"/>
                      <input type="hidden" id="clave" name="clave" value="7597"/>
                      <input type="submit" className="style-29" value="Ir a la App de Irco" name="castellano" id="castellano"/>
                    </form>
                </div>*/}
                {/*inicio enlace a Menu mensual*/}               

                                    <a
                                  href="/docs/MENU_OCTUBRE_2023.pdf"
                                  h-use-smooth-scroll="true"
                                  target="_blank"
                                >
                                    <img src="./images/menu.jpg" className="wp-image-199 style-204-image style-local-161-c23-image" srcSet="./images/menu.jpg 640w, ./images/adorable-baby-beautiful-child-277149-200x300.jpg 200w" sizes="(max-width: 640px) 100vw, 640px" alt="" />
																		</a>
                                    <div className="h-image__frame h-image__frame_shadow h-hide-sm style-204-frameImage style-local-161-c23-frameImage" />
                                  </div>
                                </div>
                                <div>
                                           <a
                                  href="/docs/MENU_OCTUBRE_2023.pdf"
                                  h-use-smooth-scroll="true"
                                  target="_blank"
                                >
                                           <p>
                                              MENÚ OCTUBRE 2023
                                          </p>
                                          </a>
                                        
            {/*FIn enlace a menú mensual*/}
            </div>
        </Layout>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = listPostContent(1, config.posts_per_page);
//   const tags = listTags();
//   const pagination = {
//     current: 1,
//     pages: Math.ceil(countPosts() / config.posts_per_page),
//   };
//   return {
//     props: {
//       posts,
//       tags,
//       pagination,
//     },
//   };
// };
