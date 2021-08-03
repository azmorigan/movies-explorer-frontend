import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';

function SavedMovies(props) {

  return (
    <section className="SavedMovies">
      <div className="SavedMovies__line" />
      <MoviesCardList
        films={props.films}
        onDeleteMovie={props.onDeleteMovie} />
    </section>

  );
}

export default SavedMovies;