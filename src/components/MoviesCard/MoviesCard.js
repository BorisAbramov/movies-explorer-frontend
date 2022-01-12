import React from 'react';
import './moviesCard.css';
import { convertMinutesToHours } from '../../utils/utils';

export default function MoviesCard({
  card,
  locationSavedMovies,
  statusLikeDislikeMovieCard,
  moviesCardTitle,
}) {
  
  return (
    <>
      <li
        className="movies-card"
      >
        <a
          className="movies-card__link"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__wallpaper"
            src="https://avatars.mds.yandex.net/get-zen_doc/3341818/pub_6013c99b5f624a023d182855_6013ca273c795d58fdb6d20d/scale_1200"
            alt="карточка"
          />
          <div className="card-overlay">
            <h2 className="card-overlay__title">
              Название
            </h2>
            <p className="card-overlay__year">
              Год: 2022
            </p>
            <p className="card-overlay__country">
              Страна: Россия
            </p>
            <p className="card-overlay__director">
              Режиссер: Некто
            </p>
            <p className="card-overlay__duration">
              Продолжительность: 0
            </p>
            <p className="card-overlay__description">
              нет данных
            </p>
          </div>
        </a>
        <div className="movies-card__description">
          <h2 className="movies-card__title">
            нет данных
          </h2>
          <button
            className="movies-card__like"
            type="button"
          ></button>
          <p className="movies-card__duration">123</p>
        </div>
      </li>
    </>
  );
}
