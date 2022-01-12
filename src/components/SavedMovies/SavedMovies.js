import React from "react";
import "./savedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchMessage from "../SearchMessage/SearchMessage";

export default function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}
