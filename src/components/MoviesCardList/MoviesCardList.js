import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {

  return (

    <ul className="MoviesCardList">

      {props.films.map((card, i) => (

        <Switch key={i}>
          <Route path='/movies'>
            <MoviesCard
              onSaveMovie={props.onSaveMovie}
              {...card}
              key={card.id} />
          </Route>

          <Route path='/saved-movies'>
            <MoviesCard
              onDeleteMovie={props.onDeleteMovie}
              name={card.nameRU}
              {...card}
              key={card._id} />
          </Route>
        </Switch>




      ))
      }

    </ul >

  );
}

export default MoviesCardList;