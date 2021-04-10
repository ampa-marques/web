import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <div>
      {/* <Link href={"/posts/" + post.slug}>
        <a>
          <Date date={parseISO(post.date)} />
          <h2>{post.title}</h2>
          <style jsx>
            {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
          </style>
        </a>
      </Link> */}
      {/* <textarea>{JSON.stringify(post, null, 2)}</textarea> */}
      <div
        className="h-column h-column-container d-flex h-col-lg-4 h-col-md-6 h-col-12 post-290 post type-post status-publish format-standard has-post-thumbnail hentry category-proyectos-y-tareas-de-la-ampa masonry-item style-290-outer style-local-161-c59-outer"
        // style={{
        //   position: "absolute",
        //   left: "0%",
        //   top: "0px",
        // }}
      >
        <div
          data-colibri-id="161-c59"
          className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-290 style-local-161-c59 position-relative"
        >
          {/*&#8212;-*/}
          {/*&#8212;-*/}
          <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
            {/*&#8212;-*/}
            <div
              data-href={"/posts/" + post.slug}
              data-colibri-component="link"
              data-colibri-id="161-c60"
              className="colibri-post-thumbnail colibri-post-has-thumbnail colibri-post-thumbnail-has-placeholder style-291 style-local-161-c60 h-overflow-hidden position-relative h-element cursor-pointer"
              data-loaded="true"
            >
              {/*&#8212;-*/}
              <div className="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-161-c60-height">
                <a
                  href={"/posts/" + post.slug}
                  title="Resultados de la encuesta ¿Qué tal la AMPA 2019?"
                >
                  <img
                    width={1420}
                    height={664}
                    src="https://via.placeholder.com/322x181"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    
                    sizes="(max-width: 1420px) 100vw, 1420px"
                  />
                </a>
              </div>
              <div className="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
                <div className="w-100 h-y-container">
                  {/*&#8212;-*/}
                </div>
              </div>
            </div>
            <div
              data-colibri-id="161-c61"
              className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-2 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-292 style-local-161-c61 position-relative"
            >
              {/*&#8212;-*/}
              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-2 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                {/*&#8212;-*/}
                <div className="h-column h-column-container d-flex h-col-lg h-col-md h-col-auto style-293-outer style-local-161-c62-outer">
                  <div
                    data-colibri-id="161-c62"
                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-293 style-local-161-c62 position-relative"
                  >
                    {/*&#8212;-*/}
                    {/*&#8212;-*/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                      {/*&#8212;-*/}
                      <div
                        data-colibri-id="161-c63"
                        className="h-blog-categories style-294 style-local-161-c63 position-relative h-element"
                      >
                        {/*&#8212;-*/}
                        <div className="h-global-transition-all">
                          <a
                            className="d-inline-block colibri-post-category"
                            href="http://krisish-oo5s.localhost.run/category/proyectos-y-tareas-de-la-ampa/"
                          >
                            {post.tags}
                      </a>
                        </div>
                      </div>
                      <div
                        data-colibri-id="161-c64"
                        className="h-blog-title style-295 style-local-161-c64 position-relative h-element"
                      >
                        {/*&#8212;-*/}
                        <div className="h-global-transition-all">
                          <a href={"/posts/" + post.slug}>
                            <h4 className="colibri-word-wrap">
                              {post.title}
                        </h4>
                          </a>
                        </div>
                      </div>
                      <div
                        data-colibri-id="161-c65"
                        className="style-296 style-local-161-c65 position-relative h-element"
                      >
                        {/*&#8212;-*/}
                        <div className="h-global-transition-all">
                          <div className="colibri-post-excerpt" >{post.plainText}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-colibri-id="161-c66"
              className="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-2 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-297 style-local-161-c66 position-relative"
            >
              {/*&#8212;-*/}
              <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-2 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
                {/*&#8212;-*/}
                <div className="h-column h-column-container d-flex h-col-lg h-col-md h-col style-298-outer style-local-161-c67-outer">
                  <div
                    data-colibri-id="161-c67"
                    className="d-flex h-flex-basis h-column__inner h-ui-empty-state-container h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-0 style-298 style-local-161-c67 position-relative"
                  >
                    {/*&#8212;-*/}
                    {/*&#8212;-*/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100">
                      {/*&#8212;-*/}
                    </div>
                  </div>
                </div>
                <div className="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-300-outer style-local-161-c68-outer">
                  <div
                    data-colibri-id="161-c68"
                    className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-0 style-300 style-local-161-c68 position-relative"
                  >
                    {/*&#8212;-*/}
                    {/*&#8212;-*/}
                    <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                      {/*&#8212;-*/}
                      <div
                        data-colibri-id="161-c69"
                        className="h-x-container style-301 style-local-161-c69 position-relative h-element"
                      >
                        {/*&#8212;-*/}
                        <div className="h-x-container-inner style-dynamic-161-c69-group">
                          {/*&#8212;-*/}
                          <span className="h-button__outer style-302-outer style-local-161-c70-outer d-inline-flex h-element">
                            <a
                              h-use-smooth-scroll="true"
                              href={"/posts/" + post.slug}
                              data-colibri-id="161-c70"
                              className="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-302 style-local-161-c70 position-relative"
                            >
                              {/*&#8212;-*/}
                              {/*&#8212;-*/}
                              <span>Más</span>
                              <span className="h-svg-icon h-button__icon style-302-icon style-local-161-c70-icon">
                                {/*&#8211;Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)&#8211;*/}
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="arrow-right"
                                  viewBox="0 0 512 545.5"
                                >
                                  <path d="M299.5 140.5l136 136 11 11.5-11 11.5-136 136-23-23L385 304H64v-32h321L276.5 163.5z"></path>
                                </svg>
                              </span>
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
      </div>
    </div>
  );
}
