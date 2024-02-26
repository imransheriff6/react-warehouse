import React from "react";
import bg1 from "../../../images/about1.png";
import bg2 from "../../../images/about2.png";
import bg3 from "../../../images/shape.png";
import bg4 from "../../../images/about3.png";
import "./aboutUsMain.css";
import History from "../history/history";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
function AboutUsPage() {
  return (
    <section id="about_us_page">
      <div class="breadcrumb-area bg-overlay-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-inner">
                <div class="section-title mb-0">
                  <h2 class="page-title">ABOUT US</h2>
                  <ul class="page-list">
                    <li>
                      <Link to="/">HOME</Link>
                    </li>{" "}
                    /<li class="ps-0">ABOUT US</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 p-5">
        <div class="col-lg-6 about-img-container">
          <div class="about-thumb-wrap">
            <img class="img-1" src={bg3} alt="img" />
            <img class="img-2" src={bg1} alt="img" />
            <img class="img-3" src={bg2} alt="img" />
          </div>
        </div>
        <div class="col-lg-6 align-self-center">
          <div class="about-inner-wrap">
            <div class="section-title mb-0">
              <h2 class="subtitle title-underline">ABOUT US</h2>
              <h2 class="title">WELCOME WORLD WIDE BEST WAREHOUSE COMPANY</h2>
              <p class="cards__item__text">
                Welcome to Move, where efficiency meets reliability.
                As a leading provider of warehousing solutions, we pride
                ourselves on our commitment to excellence in storage, logistics,
                and distribution services. With 25 of industry
                experience, we have established ourselves as a trusted partner
                for businesses of all sizes seeking streamlined supply chain
                management.
              </p>
              <p class="cards__item__text">
                At Move, our mission is simple: to optimize your
                storage and distribution processes, allowing you to focus on
                what matters most—growing your business. Our state-of-the-art
                facilities are equipped with the latest technology and security
                measures to ensure the safety and integrity of your inventory.
              </p>
              <p class="cards__item__text">
                What sets us apart is our dedication to personalized service. We
                understand that every client has unique needs, which is why our
                team of experienced professionals works closely with you to
                develop customized solutions tailored to your specific
                requirements. Whether you're looking for short-term storage or
                long-term warehousing solutions, we have the expertise and
                resources to meet your needs.
              </p>
              <p class="cards__item__text">
                Transparency and communication are at the heart of our
                operations. From real-time inventory tracking to regular updates
                on order fulfillment, we strive to keep you informed every step
                of the way. Our commitment to customer satisfaction drives
                everything we do, and we are constantly seeking ways to improve
                and innovate to better serve you.
              </p>
              <p class="cards__item__text">
                Partner with Move and experience the difference that
                reliable, efficient warehousing can make for your business.
                Contact us today to learn more about our services and how we can
                help you achieve your logistics goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <History />
      <Footer />
    </section>
  );
}
export default AboutUsPage;
