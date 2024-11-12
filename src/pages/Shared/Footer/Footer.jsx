/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer  text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <a
          className="text-xl"
          style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
        >
          বাংলাGPT
        </a>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav>
    </footer>
  );
};

export default Footer;
