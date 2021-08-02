import './MoviesCard.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {

  const [isLiked, setIsLiked] = useState(false)

  function handleLikeCLick() {
    props.onSaveMovie(props)
  }

  return (
    <li className="MoviesCard">
      <a
        className="MoviesCard__link"
        href={props.trailerLink}
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
              onClick={handleLikeCLick}
              className={`MoviesCard__like ${isLiked && 'MoviesCard__like_active'}`} />
          </Route>
          <Route path="/saved-movies">
            <button className="MoviesCard__delete" />
          </Route>
        </Switch>

      </div>
    </li>
  );
}

export default MoviesCard;