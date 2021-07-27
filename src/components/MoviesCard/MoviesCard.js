import './MoviesCard.css';
import { useState } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false)

  function toggleLike(value) {
    setIsLiked(!value)
  }

  return (
    <li className="MoviesCard">
      <a className="MoviesCard__link">
        <img className="MoviesCard__image" src={props.img} alt={props.name} />
      </a>
      <div className="MoviesCard__data">
        <div className="MoviesCard__info">
          <h3 className="MoviesCard__title">{props.name}</h3>
          <p className="MoviesCard__duration">{props.duration}</p>
        </div>

        <Switch>
          <Route path="/movies">
            <button
              onClick={() => toggleLike(isLiked)}
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