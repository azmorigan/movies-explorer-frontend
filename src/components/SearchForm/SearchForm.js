import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import React, { useState, useCallback, useEffect } from "react";
import { Route } from 'react-router-dom';

function SearchForm(props) {
  const [searchFilm, setSearchFilm] = useState('')
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)

  let isSearched = false

  function handleChangeSearchFilm(e) {
    setSearchFilm(e.target.value)
    setError(e.target.validationMessage)
    setIsValid(e.target.closest("form").checkValidity())
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

  const resetForm = useCallback(
    () => {
      setError('')
      setIsValid(false)
    },
    [setError, setIsValid]
  )

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [document.location.pathname, resetForm])

  return (
    <form
      onSubmit={handleSubmit}
      className="SearchForm"
      noValidate>
      <div className="SearchForm__container">
        {!isValid && <span className="SearchForm__error">{error}</span>}
        <div className="SearchForm__form">
          <Route path='/movies'>
            <input
              required
              onChange={handleChangeSearchFilm}
              value={searchFilm}
              className="SearchForm__input"
              placeholder="Фильм" />
          </Route>
          <Route path='/saved-movies'>
            <input
              onChange={handleChangeSearchFilm}
              value={searchFilm}
              className="SearchForm__input"
              placeholder="Фильм" />
          </Route>
          <button
            disabled={!isValid}
            type="submit"
            className={`SearchForm__button ${!isValid && 'SearchForm__button_disabled'}`} />
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