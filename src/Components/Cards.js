import React from "react";
import "./Cards.css";
import CardItem from "./Carditem";
import smart from "../images/service_1.avif";
import WAREHOUSING from "../images/WAREHOUSING.jpg";
import ORDERFULFILLMENT from "../images/ORDER FULFILLMENT.jpg";
import RETAIL from "../images/RETAIL.jpg";
import TRANSPORTATION from "../images/TRANSPORTATION.jpg";
import services2 from "../images/service_2.avif";

function Cards() {
  return (
    <div className="cards" id="services">
      <h1 className="title-underline center">OUR SERVICES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={smart}
              text="We'll Take It From Here
How do you make sure you have your inventory at the right place at the right time? With customers across the country, having your inventory concentrated in one or only a few markets can make it harder to get your product to your customer on time. "
              label="SMART REPLENISHMENT"
              path="/services"
            />
            <CardItem
              src={WAREHOUSING}
              text="With warehouses across the nation, Smart Warehousing can get you closer to your customer saving you time and money when it comes to last-mile delivery. Take advantage of over 12 million square feet of warehouse space with temperature-controlled spaces for perishable products."
              label="WAREHOUSING DONE RIGHT"
              path="/services"
            />
             <CardItem
              src={ORDERFULFILLMENT}
              text="As an experienced strategic logistics partner, Smart Warehousing can help meet the demands of an ever-growing market. With abilities to handle big and bulky or small and fragile, we can become your turnkey fulfillment partner. "
              label="ORDER FULFILLMENT"
              path="/services"
            />
            <CardItem
              src={RETAIL}
              text="With our nationwide footprint, we can service almost every major domestic retailer within 1-2 days with a 99.8% inventory accuracy rate, competitive shipping and storage rates, and complete inventory transparency through our proprietary warehouse management system."
              label="RETAIL FULFILLMENT"
              path="/products"
            />
            <CardItem
              src={TRANSPORTATION}
              text="One of the most vital parts of a supply chain is your transportation. Having a fulfillment partner with a rock-solid transportation service will help ensure that you can deliver your products to any customer, anywhere."
              label="TRANSPORTATION"
              path="/sign-up"
            />
             <CardItem
              src={services2}
              text="Cross docking is the process in which containers are unloaded from one truck at the receiving dock and reloaded onto a different truck at the shipping dock without being stored in the warehouse."
              label="CROSS-DOCKING"
              path="/sign-up"
            />
          </ul>
          {/* <ul className="cards__items">
           
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
