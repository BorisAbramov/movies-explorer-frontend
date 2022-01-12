import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ mainStyleHeader, loggedIn, visibleHeader }) {
  return (
    <>
      <header
        className={` ${
          visibleHeader ? "header" : "display-none"
        } ${mainStyleHeader ? "" : "header_style_movie"} `}
      >
        <Navigation loggedIn={loggedIn} place="header" />
      </header>
    </>
  );
}
