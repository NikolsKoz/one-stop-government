import React from "react";
import Header from "../components/Header.tsx";

type HeroProps = {
  title: string;
};

const Hero = (props: HeroProps) => {
  // const {}
  return (
    <div className="hero">
      Hero
      <Header />
    </div>
  );
};

export default Hero;
