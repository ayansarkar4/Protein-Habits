import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ourproduct from "../components/Ourproduct";

import Testimonial from "../components/Testimonial";
import Founders from "../components/Founders";
import Review from "../components/Review";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourproduct />
      <Testimonial />
      <Founders />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
