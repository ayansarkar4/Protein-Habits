import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* This is where pages will render */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
