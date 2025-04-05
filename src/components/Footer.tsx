import React from "react";
import { DATA } from "../mock_data/data.ts";

type FooterProps = {
  title: string;
};

const Footer = (props: FooterProps) => {
  // const {top, bottom} = DATA;
  return (
    <footer className="footer">
      <div className="footer-top">
        {DATA.footer.top.map((item, key) => (
          <div className="footer-item">
            <p className="footer-title">{item.title}</p>
            <ul>
              {item.list.map((list, key) => (
                <li>
                  <a href="/" className="footer-link" key={key}>
                    {list.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <ul>
          {DATA.footer.bottom.left.map((item, key) => (
            <li>
              <a href="/" className="footer-title" key={key}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* <div>
        {DATA.footer.bottom.right.social.map((item, key) => (
            <img
            src={`${process.env.PUBLIC_URL}${item.icon}`}
            alt={`Slide ${key}`}
            className="slide-image"
          />
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
