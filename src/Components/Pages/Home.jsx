import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import Howitworks from "../Howitworks";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Content />
      <Howitworks />
      <Footer />
    </div>
  );
};

export default Home;
