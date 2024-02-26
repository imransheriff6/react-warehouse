import React from "react";
import bg from "../../../images/about-history-bg.png";
import "./history.css";
function History() {
  return (
    <section id="history" className="mb-4">
      <h1 className="title-underline center">Our Counters</h1>
      <div class="d-flex wpb_row vc_inner vc_row-fluid mb-5">
        <div class="wpb_column vc_column_container vc_col-sm-3 cms_animate fadeIn wow">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div
                class="cms-counter-wraper template-cms_counter_single content-align-default "
                id="cms-counter"
                onclick=""
              >
                <div class="cms-counter-single text-center">
                  <div class="box">
                    <span class="cms-icon">
                      <i class="fa fa-cubes"></i>
                    </span>
                    <p
                      id="counter_cms-counter"
                      class="cms-counter stat-count zero"
                      data-suffix="<span></span>"
                      data-prefix=""
                      data-type="zero"
                      data-digit="2815"
                    >
                      2815
                    </p>
                    <h4>Projects done</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="wpb_column vc_column_container vc_col-sm-3 cms_animate fadeIn wow"
          data-wow-delay="200ms"
        >
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div
                class="cms-counter-wraper template-cms_counter_single content-align-default "
                id="cms-counter-2"
                onclick=""
              >
                <div class="cms-counter-single text-center">
                  <div class="box">
                    <span class="cms-icon">
                      <i class="fa fa-users"></i>
                    </span>
                    <p
                      id="counter_cms-counter-2"
                      class="cms-counter stat-count zero"
                      data-suffix="<span></span>"
                      data-prefix=""
                      data-type="zero"
                      data-digit="96"
                    >
                      96
                    </p>
                    <h4>Hardworking people</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="wpb_column vc_column_container vc_col-sm-3 cms_animate fadeIn wow"
          data-wow-delay="300ms"
        >
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div
                class="cms-counter-wraper template-cms_counter_single content-align-default "
                id="cms-counter-3"
                onclick=""
              >
                <div class="cms-counter-single text-center">
                  <div class="box">
                    <span class="cms-icon">
                      <i class="fa fa-thumbs-up"></i>
                    </span>
                    <p
                      id="counter_cms-counter-3"
                      class="cms-counter stat-count zero"
                      data-suffix="<span></span>"
                      data-prefix=""
                      data-type="zero"
                      data-digit="125"
                    >
                      125
                    </p>
                    <h4>Years of experience</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="wpb_column vc_column_container vc_col-sm-3 cms_animate fadeIn wow"
          data-wow-delay="400ms"
        >
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div
                class="cms-counter-wraper template-cms_counter_single content-align-default "
                id="cms-counter-4"
                onclick=""
              >
                <div class="cms-counter-single text-center">
                  <div class="box">
                    <span class="cms-icon">
                      <i class="fa fa-smile"></i>
                    </span>
                    <p
                      id="counter_cms-counter-4"
                      class="cms-counter stat-count zero"
                      data-suffix="<span></span>"
                      data-prefix=""
                      data-type="zero"
                      data-digit="85"
                    >
                      85
                    </p>
                    <h4>Branches</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title-underline center">Our History</h1>
      <img src={bg} alt="History" />
    </section>
  );
}
export default History;
