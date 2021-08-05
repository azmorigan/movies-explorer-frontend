import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './ShortMovies.css';

function ShortMovies(props) {

  const [renderedFilms, setRenderedFilms] = useState(props.films)

  function filterShortMovies(arr) {
    const shortMovies = arr.filter(item => item.duration <= 40)
    return shortMovies
  }

  useEffect(() => {
    setRenderedFilms(filterShortMovies(props.films))
  }, [props.tumblerState])


  return (
    <ul className="ShortMovies">

      {renderedFilms.map((film, i) => (
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

export default ShortMovies;