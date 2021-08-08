import './MoviesCard.css';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function MoviesCard(props) {
  const savedMovies = useContext(SavedMoviesContext)

  const isSaved = savedMovies.some(film => film.nameRU === props.nameRU)

  function handleLikeCLick() {
    props.onSaveMovie(props)
  }

  function handleMovieDelete() {
    props.onDeleteMovie(props._id)
  }

  // Найти фильм из сохраненных, соответствующий фильму из
  // найденных фильмов и удалить его, isSaved поменяется
  function handleDeleteSearchMovie() {
    props.onDeleteSearchMovie(props)
  }

  const toggleLikeCard = () => {
    isSaved ? handleDeleteSearchMovie() : handleLikeCLick()
  }


  return (
    <li className="MoviesCard">
      <a
        className="MoviesCard__link"
        href={props.trailerLink || props.trailer}
        target="_blank"
        rel="noreferrer">
        <Switch>
          <Route path='/movies'>
            <img className="MoviesCard__image" src={`https://api.nomoreparties.co${props.image.url}`} alt={props.nameRU} />
          </Route>
          <Route path='/saved-movies'>
            <img className="MoviesCard__image" src={props.image} alt={props.nameRU} />
          </Route>
        </Switch>

      </a>
      <div className="MoviesCard__data">
        <div className="MoviesCard__info">
          <h3 className="MoviesCard__title">{props.nameRU}</h3>
          <p
            className="MoviesCard__duration">
            {Math.floor(props.duration / 60)}ч {props.duration % 60}м
          </p>
        </div>

        <Switch>
          <Route path="/movies">
            <button
              onClick={toggleLikeCard}
              className={`MoviesCard__like ${isSaved && 'MoviesCard__like_active'}`} />
          </Route>
          <Route path="/saved-movies">
            <button
              onClick={handleMovieDelete}
              className="MoviesCard__delete" />
          </Route>
        </Switch>

      </div>
    </li>
  );
}

export default MoviesCard;