import React, { useState } from "react";
import "./searchForm.css";
import useFormValidator from "../../hooks/useFormValidator";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__search">
          <input
            name="movie"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            minLength="1"
            required
          ></input>
          <button
            className="search-form__button-submit"
            type="submit"
          >
            Найти
          </button>
          <span
            className="search-form__input-error"
          >
            Нужно ввести ключевое слово
          </span>
        </div>
        <div className="search-form__checkbox">
        <FilterCheckbox />
        <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}
