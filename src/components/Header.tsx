import React from "react";
// import { Link } from "react-router-dom";
import { DATA } from "../mock_data/data.ts";

type HeaderProps = {
  // title: string;
};

const Header = (props: HeaderProps) => {
  const { nav, buttons, icon } = DATA;
  return (
    <header className="header">
      <div className="navigation">
        {nav.map((item, key) => (
          <a className="" key={key}>
            {item.title}
          </a>
        ))}
      </div>
      <div className="buttons">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        {buttons.map((item, key) => (
          <button className="" key={key}>
            {item.title}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
