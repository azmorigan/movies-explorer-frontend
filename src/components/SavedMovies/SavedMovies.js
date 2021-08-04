import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';

function SavedMovies(props) {

  useEffect(() => {
    props.getMovies()
  }, [props.getMovies()])

  return (
    <section className="SavedMovies">
      <div className="SavedMovies__line" />
      <MoviesCardList
        films={props.films}
        onDeleteMovie={props.onDeleteMovie}
        tumblerState={props.tumblerState} />
    </section>

  );
}

export default SavedMovies;