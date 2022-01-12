import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://borisabramov.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://borisabramov.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://mesto-full.nomoredomains.work/"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
