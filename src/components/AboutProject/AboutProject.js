import React from "react";
import './aboutproject.css';

export default function AboutProject() {
    return (
      <section className="about-project">
          {/* <h2 className="aboutProject__title">О проекте</h2>
          <div className="aboutProject__block">
              <div className="aboutProject__text">
                <p className="aboutProject__subtitle">
                Дипломный проект включал 5 этапов
                </p>
                <p className="aboutProject__subtitle">
                На выполнение диплома ушло 5 недель
                </p>
                <p className="aboutProject__info">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
                <p className="aboutProject__info">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
              </div>
              <div className="aboutProject__time">
                <div className="aboutProject__week">
                  <p className="aboutProject__week-text">1 неделя</p>
                </div>
                <div className="aboutProject__month">
                <p className="aboutProject__month-text">4 недели</p>
                </div>
                <p className="aboutProject__backend">Back-end</p>
                <p className="aboutProject__frontend">Front-end</p>
              </div>

          </div> */}
          <h2 className="section-title">О проекте</h2>
      <ul className="about-project__description-items">
        <li className="about-project__description-item">
          <p className="about-project__subtitle">
            Дипломный проект включал 5&nbsp;этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="about-project__description-item">
          <p className="about-project__subtitle">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </p>
          <p className="about-project__text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__direction-items">
        <li className="about-project__direction-item">
          <p className="about-project__time">1 неделя</p>
          <p className="about-project__direction">Back-end</p>
        </li>
        <li className="about-project__direction-item about-project__direction-item_style_front-end">
          <p className="about-project__time about-project__time_style_front-end">
            4 недели
          </p>
          <p className="about-project__direction">Front-end</p>
        </li>
      </ul>
      <p className="time"></p>
      </section>
    );
  }