import React from "react";
import "./promo.css";

export default function Promo() {
  return (
    <section className="promo">
    <div className="promo__textBlock">
      <h1 className="promo__title">
      Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.    
      </p>
      <button className="promo__button">Узнать больше</button>
    </div>
      <div className="promo__logo" />
    </section>
  );
}