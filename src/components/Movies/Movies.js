import './Movies.css';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';



function Movies(props) {
  useEffect(() => {
    props.onRenderFilms()
  }, [])

  return (
    <section className="Movies">
      <div className="Movies__line" />
      {props.onLoad ? <Preloader />
        : <MoviesCardList
          onDeleteSearchMovie={props.onDeleteSearchMovie}
          films={props.films}
          onSaveMovie={props.onSaveMovie} />}
      {props.notFoundFilms && <h2 className="Movies__notice">Ничего не найдено :(</h2>}
      {/* <div className="Movies__more">Ещё</div> */}
    </section>


  );
}

export default Movies;