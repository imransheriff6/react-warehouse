import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import Caros from "../Caros";
import AboutUs from "./aboutUs/aboutUs";
import ChooseUs from "./choseus/choseus";
import History from "./history/history";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Cards />
      <ChooseUs />
      <Caros />
      {/* <History /> */}
      <Footer></Footer>
    </>
  );
}

export default Home;
