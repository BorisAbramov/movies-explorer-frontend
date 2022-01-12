import React from "react";
import "./header.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <>
      <header className="header">
        <Navigation place="header" />
      </header>
    </>
  );
}
