import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShortMovies from '../ShortMovies/ShortMovies';
import { useState, useEffect } from 'react';

function SavedMovies(props) {
  const [notFoundSavedMovies, setNotFoundSavedMovies] = useState(false)

  function setNotFoundMessage(value) {
    setNotFoundSavedMovies(value)
  }

  return (
    <section className="SavedMovies">
      <div className="SavedMovies__line" />
      {!props.tumblerState
        ? <MoviesCardList
          // changeIsClicked={props.changeIsClicked}
          setNotFoundMessage={setNotFoundMessage}
          searchedSavedMovies={props.searchedSavedMovies}
          films={props.films}
          onDeleteMovie={props.onDeleteMovie}
          tumblerState={props.tumblerState}
          isSearched={props.isSearched} />
        : <ShortMovies
          onDeleteSearchMovie={props.onDeleteSearchMovie}
          films={props.films}
          onSaveMovie={props.onSaveMovie}
          tumblerState={props.tumblerState} />
      }

      {notFoundSavedMovies &&
        <h2 className="SavedMovies__notice">Ничего не найдено :(</h2>}

    </section>

  );
}

export default SavedMovies;