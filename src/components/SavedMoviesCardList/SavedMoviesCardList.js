import React from "react";
import "./SavedMoviesCardList.css";
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

export default function MoviesCardList({
  locationSavedMovies,
}) {
  return (
    <section
      className="movies-card-list"
    >
      <ul className="movies-card-list__container">
        <li>
          <SavedMoviesCard />
        </li>
        <li>
          <SavedMoviesCard />
        </li>
        <li>
          <SavedMoviesCard />
        </li>
        <li>
          <SavedMoviesCard />
        </li>
        <li>
          <SavedMoviesCard />
        </li>
        <li>
          <SavedMoviesCard />
        </li>
      </ul>
      <button
        className="movies-card-list__button-add-more-cards"
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}
