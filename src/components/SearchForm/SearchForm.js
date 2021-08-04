import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import React, { useState, useEffect } from "react";

function SearchForm(props) {
  const [searchFilm, setSearchFilm] = useState('')

  function handleChangeSearchFilm(e) {
    setSearchFilm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onSearchFilms(searchFilm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="SearchForm">
      <div className="SearchForm__container">
        <div className="SearchForm__form">
          <input
            onChange={handleChangeSearchFilm}
            value={searchFilm}
            required
            className="SearchForm__input"
            placeholder="Фильм" />
          <button type="submit" className="SearchForm__button" />
        </div>
        <FilterCheckbox
          onTumbler={props.onTumbler}
          className="FilterCheckbox_type_desktop" />
      </div>
      <FilterCheckbox
        onTumbler={props.onTumbler}
        className="FilterCheckbox_type_mobile" />
    </form>
  );
}

export default SearchForm;