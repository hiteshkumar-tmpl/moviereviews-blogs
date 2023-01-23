import React from "react";
import "../Footer/Footer.css";
import ConForm from "./ConForm";
const Footer = () => {
  console.log(new Date().getFullYear());

  return (
    <div className="footer">
      <ConForm />
      <div className="footer_line">
        <span>
          © {new Date().getFullYear()} by On My Screen. Powered and secured by{" "}
          <a href="https://tunicalabsmedia.com/ " target="blank">
            Tunica Labs
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
