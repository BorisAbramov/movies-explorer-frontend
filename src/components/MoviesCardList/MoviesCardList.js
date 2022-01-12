import React from "react";
import "./moviesCardList.css";
// импорт компонентов
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  locationSavedMovies,
}) {
  return (
    <section
      className="movies-card-list"
    >
      <ul className="movies-card-list__container">
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
        <li>
          <MoviesCard />
        </li>
      </ul>
      <button
        className={` ${
          locationSavedMovies}  `}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}
