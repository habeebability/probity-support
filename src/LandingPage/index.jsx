import React from "react";
import Banner from "../Banner";
import Footer from "../Footer";
import "../LandingPage/LandingPage.css";
import Navigation from "../Navigation";

const LandingPage = () => {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
