import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {

  return (

    <ul className="MoviesCardList">

      {props.films.map((film, i) => (
        <Switch key={i}>
          <Route path='/movies'>
            <MoviesCard
              onDeleteSearchMovie={props.onDeleteSearchMovie}
              onSaveMovie={props.onSaveMovie}
              {...film}
              key={film.id} />
          </Route>

          <Route path='/saved-movies'>
            <MoviesCard
              onDeleteMovie={props.onDeleteMovie}
              name={film.nameRU}
              {...film}
              key={film._id}
              savedFilms={props.savedFilms} />
          </Route>
        </Switch>
      ))}
    </ul >

  );
}

export default MoviesCardList;