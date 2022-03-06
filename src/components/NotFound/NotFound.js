import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <button
        className="not-found__button-go-back"
        type="button"
        onClick={() => navigate.goBack()}
      >
        Назад
      </button>
    </section>
  );
}
