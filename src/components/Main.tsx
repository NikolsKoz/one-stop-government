import React from "react";
import TabbedGrid from "../components/topics.tsx";

type MainProps = {
  title: string;
};

const Main = (props: MainProps) => {
  // const {}
  return (
    <div className="main">
      <TabbedGrid />
    </div>
  );
};

export default Main;
