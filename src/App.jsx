import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ourproduct from "./components/Ourproduct";
import Testimonial from "./components/Testmonial";
import Founders from "./components/Founders";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourproduct />
      <Testimonial />
      <Founders />
      <Review />
    </div>
  );
};

export default App;
