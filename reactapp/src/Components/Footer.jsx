import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>📅 Reminder App © {new Date().getFullYear()} | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
