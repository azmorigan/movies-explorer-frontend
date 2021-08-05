import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import React, { useState, useEffect } from "react";

function SearchForm(props) {
  const [searchFilm, setSearchFilm] = useState('')
  let isSearched = false

  function handleChangeSearchFilm(e) {
    setSearchFilm(e.target.value)
  }

  function handleSearchAllMovies(e) {
    e.preventDefault()
    props.onSearchFilms(searchFilm)
  }

  function handleSearchSavedMovies(e) {
    e.preventDefault()
    isSearched = true
    props.onSearchFilms(searchFilm, isSearched)
  }

  const handleSubmit = (e) => {
    document.location.pathname === '/saved-movies'
      ? handleSearchSavedMovies(e)
      : handleSearchAllMovies(e)
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