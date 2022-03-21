import React from 'react';
import Navigation from "../Navigation/Navigation";
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './main.css';

function Main() {
  
      return (
        <>
        <Promo />
        <section className="menu">
          <Navigation place="menu" />
        </section>
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        </>
      )
  }
  
  export default Main;