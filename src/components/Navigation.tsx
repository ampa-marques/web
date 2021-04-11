import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <div
    data-colibri-navigation-overlap="true"
    role="banner"
    className="h-navigation_outer h-navigation_overlap style-2-outer style-local-137-h2-outer"
    style={{}}
  >
    {/**/}
    <div
      style={{
        visibility: "hidden",
        display: "flex",
        width: "1440px",
        height: "90px",
        margin: "0px",
        float: "none",
        position: "relative",
        inset: "0px",
      }}
    />
    <div
      id="navigation"
      data-colibri-component="navigation"
      data-colibri-id="137-h2"
      className="h-section h-navigation h-navigation d-flex style-2 style-local-137-h2 h-navigation_sticky animated"
      data-loaded="true"
      style={{
        left: "0px",
        width: "1440px",
        position: "fixed",
        top: "0px",
        zIndex: 9999,
      }}
      data-in-sticky-state="true"
    >
      {/**/}
      <div className="h-section-grid-container h-section-fluid-container">
        <div data-nav-normal>
          <div
            data-colibri-id="137-h3"
            className="h-row-container h-section-boxed-container gutters-row-lg-0 gutters-row-md-0 gutters-row-2 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-2 style-3 style-local-137-h3 position-relative"
          >
            {/**/}
            <div className="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-2 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-2">
              {/**/}
              <div className="h-column h-column-container d-flex h-col-none style-4-outer style-local-137-h4-outer">
                <div
                  data-colibri-id="137-h4"
                  data-placeholder-provider="navigation-logo"
                  className="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-0 style-4 style-local-137-h4 position-relative"
                >
                  {/**/}
                  {/**/}
                  <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                    {/**/}
                    <div
                      data-colibri-id="137-h5"
                      className="d-flex align-items-center text-lg-left text-md-left text-left justify-content-lg-start justify-content-md-start justify-content-start style-5 style-local-137-h5 position-relative h-element"
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
                          className="h-logo__image h-logo__image_h logo-image style-5-image style-local-137-h5-image"
                          alt=""
                        />
                        <img
                          src="./images/AMPA_COLOR.jpg"
                          className="h-logo__alt-image h-logo__alt-image_h logo-alt-image style-5-image style-local-137-h5-image"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-column h-column-container d-flex h-col-none style-6-outer style-local-137-h6-outer h-hide-sm">
                <div
                  data-colibri-id="137-h6"
                  data-placeholder-provider="navigation-spacing"
                  className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-6 style-local-137-h6 h-hide-sm position-relative"
                >
                  {/**/}
                  {/**/}
                  <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                    {/**/}
                    <div
                      data-colibri-id="137-h7"
                      className="style-7 style-local-137-h7 position-relative h-element"
                    >
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-column h-column-container d-flex h-col-none style-8-outer style-local-137-h8-outer">
                <div
                  data-colibri-id="137-h8"
                  data-placeholder-provider="navigation-menu"
                  className="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-2 v-inner-lg-0 v-inner-md-0 v-inner-2 style-8 style-local-137-h8 position-relative"
                >
                  {/**/}
                  {/**/}
                  <div className="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                    {/**/}
                    <div
                      data-colibri-component="dropdown-menu"
                      role="navigation"
                      h-use-smooth-scroll-all="true"
                      data-colibri-id="137-h9"
                      className="h-menu h-global-transition-all h-ignore-global-body-typography has-offcanvas-mobile h-menu-horizontal h-dropdown-menu style-9 style-local-137-h9 position-relative h-element"
                      data-loaded="true"
                    >
                      {/**/}
                      <div className="h-global-transition-all h-main-menu">
                        <div className="colibri-menu-container">
                          <ul
                            id="menu-actividades"
                            className="colibri-menu bordered-active-item bordered-active-item--bottom effect-borders-grow grow-from-left"
                          >
                            <li
                              id="menu-item-274"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-274"
                            >
                              <a href="http://krisish-oo5s.localhost.run/ampa/">
                                AMPA
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
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-499"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-499"
                                >
                                  <a href="http://krisish-oo5s.localhost.run/ampa/">
                                    Acerca del AMPA
                                  </a>
                                </li>
                                <li
                                  id="menu-item-358"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-358"
                                >
                                  <a href="http://krisish-oo5s.localhost.run/ampa/asociate/">
                                    Asóciate
                                  </a>
                                </li>
                                <li
                                  id="menu-item-315"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-315"
                                >
                                  <a href="http://krisish-oo5s.localhost.run/ampa/calendario/">
                                    Calendario
                                  </a>
                                </li>
                              </ul>
                            </li>
                            {/* <li
                              id="menu-item-275"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-275"
                            >
                              <a href="http://krisish-oo5s.localhost.run/extraescolares/">
                                Extraescolares
                              </a>
                            </li> */}
                            <li
                              id="menu-item-276"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-276"
                            >
                              <a href="http://krisish-oo5s.localhost.run/comedor/">
                                Comedor
                              </a>
                            </li>
                            <li
                              id="menu-item-277"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-277"
                            >
                              <a href="http://krisish-oo5s.localhost.run/colegio-2/">
                                Colegio
                              </a>
                            </li>
                            <li
                              id="menu-item-278"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-278"
                            >
                              <a href="/posts/">
                                Noticias
                              </a>
                            </li>
                            <li
                              id="menu-item-382"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"
                            >
                              <a href="http://krisish-oo5s.localhost.run/contacto/">
                                Contacto
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        data-colibri-id="137-h10"
                        className="h-mobile-menu h-global-transition-disable style-10 style-local-137-h10 position-relative h-element"
                      >
                        {/**/}
                        <a
                          data-click-outside="true"
                          data-target="#offcanvas-wrapper-137-h10"
                          data-target-id="offcanvas-wrapper-137-h10"
                          data-offcanvas-overlay-id="offcanvas-overlay-137-h10"
                          href="http://krisish-oo5s.localhost.run/?cache-buster=1797#"
                          data-colibri-component="offcanvas"
                          data-direction="right"
                          data-push="false"
                          title="Menu"
                          className="h-hamburger-button"
                          data-loaded="true"
                        >
                          <div className="icon-container h-hamburger-icon">
                            <div
                              className="h-icon-svg"
                              style={{ width: "100%", height: "100%" }}
                            >
                              {/*Icon by Font Awesome (https://fontawesome.com)*/}
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="bars"
                                viewBox="0 0 1536 1896.0833"
                              >
                                <path d="M1536 1344v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 448V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
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
          </div>
        </div>
        <div data-nav-sticky style={{ display: "none" }} />
      </div>
    </div>
    <div className="resize-triggers">
      <div className="expand-trigger">
        <div style={{ width: "1441px", height: "91px" }} />
      </div>
      <div className="contract-trigger" />
    </div>
  </div>
  
  );
}
