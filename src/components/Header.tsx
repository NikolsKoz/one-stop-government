import React from "react";
import { DATA } from "../mock_data/data.ts";
import icon from "../images/icons/icon-header.svg";
import cn from "classnames";



const Header = (props) => {
  const { nav, buttons } = DATA;
  return (
    <header className="header">
      <div className="navigation">
        {nav.map((item, key) => (
          <a href="/" className="navLink" key={key}>
            {item.title}
          </a>
        ))}
      </div>
      <div className="buttons">
        <img className="icon" src={icon} alt="" />
        {buttons.map((item, key) => (
          <button
            className={cn("button", { light: item.type === "white" })}
            key={key}
          >
            {item.title}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
