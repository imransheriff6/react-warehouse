import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import map from "../images/map-marker.png";
import phone from "../images/phone.png";
import clock from "../images/clock.png";
function Footer() {
  return (
    <div className="footer-top" id="footer_top">
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-top">
              <div className="icon">
                <img src={map} alt="img" />
              </div>
              <div className="details">
                <h6>OFFICE ADDRESS:</h6>
                <p>2245 Gilbert Ave, Cincinnati,</p>
                <p>OH 45206, United States</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-top">
              <div className="icon">
                <img src={phone} alt="img" />
              </div>
              <div className="details">
                <h6>CONTACT US:</h6>
                <p>info.logic@transpro.com</p>
                <p>+1 800-226-4054</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-top after-none">
              <div className="icon">
                <img src={clock} alt="img" />
              </div>
              <div className="details">
                <h6>WORKING HOURS:</h6>
                <p>Weekdays - Mon-Fri: 8am-21pm</p>
                <p>Weekend - Sta &amp; Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="widget widget_about">
              <div className="thumb">
                {/* <img src="assets/img/logo-white.png" alt="img" /> */}
                <Link to="/" className="social-logo">
                  MOVE
                </Link>
              </div>
              <div className="details">
                <p>
                  Streamline your logistics with our secure, efficient
                  warehousing solutions. We offer tailored storage and
                  distribution services to optimize your supply chain.
                </p>
                <ul className="social-media style-border">
                  <li>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="widget widget_nav_menu">
              <h4 className="widget-title">USEFULL LINKS</h4>
              <ul>
                <li>
                  <a href="#about_us">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Services
                  </a>
                </li>
                <li>
                  <a href="#footer_top">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="widget widget_nav_menu">
              <h4 className="widget-title">OUR SERVICES</h4>
              <ul>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Smart Replenishment
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Warehousing Done Right
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Order Fulfillment
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Transportation
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>{" "}
                    Cross-Docking
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="widget widget_subscribe">
              <h4 className="widget-title">SUBSCRIBE NOW</h4>
              <p>
                Continually evolve worldwide vortals rather than process centric
                human capital. Subscribe for our latest news &amp; articles. and
                send message.
              </p>
              <div className="single-subscribe-inner">
                <input
                  type="text"
                  placeholder="Email Address"
                  fdprocessedid="p2l1qwb"
                />
                <a className="btn btn-base" href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div classNameName="footer-container">
    //   <section classNameName="footer-subscription">
    //     {/* <p classNameName="footer-subscription-heading">
    //       Join the Adventure newsletter to receive our best vacation deals
    //     </p> */}
    //     <p classNameName="footer-subscription-text">
    //       You can unsubscribe at any time.
    //     </p>
    //     <div classNameName="input-areas">
    //       <form>
    //         <input
    //           classNameName="footer-input"
    //           name="email"
    //           type="email"
    //           placeholder="Your Email"
    //         />
    //         <Button buttonStyle="btn--outline">Subscribe</Button>
    //       </form>
    //     </div>
    //   </section>
    //   <div className="footer-links">
    //     <div classNameName="footer-link-wrapper">
    //       <div className="footer-link-items">
    //         <h2>About Us</h2>
    //         <Link to="/sign-up">How it works</Link>
    //         <Link to="/">Testimonials</Link>
    //         <Link to="/">Careers</Link>
    //         <Link to="/">Investors</Link>
    //         <Link to="/">Terms of Service</Link>
    //       </div>
    //       <div className="footer-link-items">
    //         <h2>Contact Us</h2>
    //         <Link to="/">Contact</Link>
    //         <Link to="/">Support</Link>
    //         <Link to="/">Destinations</Link>
    //         <Link to="/">Sponsorships</Link>
    //       </div>
    //     </div>
    //     <div classNameName="footer-link-wrapper">
    //       <div className="footer-link-items">
    //         <h2>WORKING HOURS</h2>
    //         <Link to="/">Mon - Fri: 8am - 8pm</Link>
    //         <Link to="/">​​Saturday: 9am - 7pm </Link>
    //         <Link to="/">​Sunday: 9am - 8pm</Link>
    //       </div>
    //       <div className="footer-link-items">
    //         <h2>Social Media</h2>
    //         <Link to="/">Instagram</Link>
    //         <Link to="/">Facebook</Link>
    //         <Link to="/">Youtube</Link>
    //         <Link to="/">Twitter</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <section className="social-media">
    //     <div className="social-media-wrap">
    //       <div className="footer-logo">
    //         <Link to="/" classNameName="social-logo">
    //           MOVE
    //           {/* <i className="fab fa-typo2" /> */}
    //         </Link>
    //       </div>
    //       {/* <small className="website-rights">TRVL © 2024</small> */}
    //       <div className="social-icons">
    //         <Link
    //           className="social-icon-link facebook"
    //           to="/"
    //           target="_blank"
    //           aria-label="Facebook"
    //         >
    //           <i className="fab fa-facebook-f" />
    //         </Link>
    //         <Link
    //           className="social-icon-link instagram"
    //           to="/"
    //           target="_blank"
    //           aria-label="Instagram"
    //         >
    //           <i className="fab fa-instagram" />
    //         </Link>
    //         <Link
    //           className="social-icon-link youtube"
    //           to="/"
    //           target="_blank"
    //           aria-label="Youtube"
    //         >
    //           <i className="fab fa-youtube" />
    //         </Link>
    //         <Link
    //           className="social-icon-link twitter"
    //           to="/"
    //           target="_blank"
    //           aria-label="Twitter"
    //         >
    //           <i className="fab fa-twitter" />
    //         </Link>
    //         <Link
    //           className="social-icon-link twitter"
    //           to="/"
    //           target="_blank"
    //           aria-label="LinkedIn"
    //         >
    //           <i className="fab fa-linkedin" />
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Footer;
