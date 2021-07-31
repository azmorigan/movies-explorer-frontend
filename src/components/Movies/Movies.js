import './Movies.css';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

  return (
    <section className="Movies">
      <div className="Movies__line" />
      {props.onLoad ? <Preloader /> : <MoviesCardList films={props.films} />}
      {props.notFoundFilms && <h2 className="Movies__notice">Ничего не найдено :(</h2>}
      {/* <div className="Movies__more">Ещё</div> */}
    </section>


  );
}

export default Movies;