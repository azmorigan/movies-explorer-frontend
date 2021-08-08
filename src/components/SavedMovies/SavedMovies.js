import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShortMovies from '../ShortMovies/ShortMovies';

function SavedMovies(props) {

  return (
    <section className="SavedMovies">
      <div className="SavedMovies__line" />
      {!props.tumblerState
        ? <MoviesCardList
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

    </section>

  );
}

export default SavedMovies;