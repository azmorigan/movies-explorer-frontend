import './Movies.css';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <section className="Movies">
      <div className="Movies__line" />
      {/* <Preloader /> */}
      <MoviesCardList />
      {/* <h1>Ничего не найдено</h1> */}
    </section>


  );
}

export default Movies;