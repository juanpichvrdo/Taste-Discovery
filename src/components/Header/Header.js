import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2 className="logo">
        <span className="taste">Taste</span> Like
      </h2>
      <a
        href="https://github.com/juanpichvrdo/Taste-Like"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        <i className="fab fa-github" />
      </a>
    </header>
  );
};

export default Header;
