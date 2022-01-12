import React from "react";
import "./footer.css";
import Navigation from "../Navigation/Navigation";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <Navigation place="footer" />
    </footer>
  );
}