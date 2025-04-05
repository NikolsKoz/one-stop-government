import React from "react";
import TabbedGrid from "../components/topics.tsx";
// import slideImages from "../components/topics.tsx";
import Swiper from "../components/Swiper.tsx";
import { DATA } from "../mock_data/data.ts";

const slideImages = DATA.swiper;

const Main = (props) => {
  return (
    <div className="main">
      <Swiper swiper={slideImages} />
      <TabbedGrid />
    </div>
  );
};

export default Main;
