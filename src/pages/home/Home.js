import React from "react";
import Banner from "./Banner";
import SecondhandProduct from "./SecondhandProduct";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats />
      <SecondhandProduct />
    </div>
  );
};

export default Home;
