import React from "react";
import Header from "../components/Header.tsx";
import logo from "../images/icons/logo.svg";
import { DATA } from "../mock_data/data.ts";

const Hero = (props) => {
  const { title, placeholder } = DATA;
  return (
    <div className="hero">
      <Header />
      <div className="hero-block">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h1>{title}</h1>
        <div className="hero-block-input">
          <input type="text" placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
