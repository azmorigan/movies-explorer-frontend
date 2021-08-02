import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

  return (
    <section className="SavedMovies">
      <div className="SavedMovies__line" />
      <MoviesCardList films={props.films} />
    </section>


  );
}

export default SavedMovies;