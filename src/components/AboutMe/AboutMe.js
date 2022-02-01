import React from "react";
import './aboutme.css';
import Navigation from '../Navigation/Navigation';
import photo from '../../images/about-me-photo.JPG';

export default function AboutMe() {
    return (
      <section className="about-me">
        <h2 className="section-title section-title_type_about-me">Студент</h2>
      <article className="about-me__wrapper">
        <h3 className="about-me__title">Борис</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 36&nbsp;лет</p>
        <p className="about-me__text">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, закончил математический
          факультет МПГУ им&nbsp;В.И.Ленина. С&nbsp;2009 года работаю
          в&nbsp;системе московского образования. Несколько лет назад меня
          заинтересовала тема веб-разработок и&nbsp;теперь все свободное время
          я изучаю эту интереснейшую сферу.
        </p>
        <Navigation place="about-me" />
      </article>
      <img
        className="about-me__photo"
        src={photo}
        alt="фотография студента"
      ></img>
      </section>
    );
  }