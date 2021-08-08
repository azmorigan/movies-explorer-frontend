import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import {
  MOVIE_COUNT_DESKTOP,
  MOVIE_COUNT_TABLET,
  MOVIE_COUNT_MOBILE,
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  LESS_TABLET_WIDTH,
  MOBILE_WIDTH,
  TIME_DELAY,
} from '../../utils/config';

function MoviesCardList(props) {
  const filmsArr = props.films
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [initialMovies, setInitialMovies] = useState([])

  let extraMovies

  const [desktopDelta, setDesktopDelta] = useState(0)
  const [tabletDelta, setTabletDelta] = useState(0)
  const [mobileDelta, setMobileDelta] = useState(0)

  const [buttonMoreVisible, setButtonMoreVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => setTimeout(() => setWindowWidth(window.innerWidth), TIME_DELAY)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  function addMovies() {

    if (windowWidth >= DESKTOP_WIDTH && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(12 + desktopDelta, 12 + desktopDelta + 3)
      setInitialMovies([...initialMovies, ...extraMovies])
      setDesktopDelta(desktopDelta + 3)
      if (filmsArr.length - desktopDelta - 12 < 4) {
        setButtonMoreVisible(false)
      }

    } else if (windowWidth >= TABLET_WIDTH && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(8 + tabletDelta, 8 + tabletDelta + 2)
      setInitialMovies([...initialMovies, ...extraMovies])
      setTabletDelta(tabletDelta + 2)
      if (filmsArr.length - tabletDelta - 8 < 3) {
        setButtonMoreVisible(false)
      }

    } else if (MOBILE_WIDTH <= windowWidth <= LESS_TABLET_WIDTH && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(mobileDelta + 5, mobileDelta + 5 + 1)
      setInitialMovies([...initialMovies, ...extraMovies])
      setMobileDelta(mobileDelta + 1)
      if (filmsArr.length - mobileDelta - 5 < 2) {
        setButtonMoreVisible(false)
      }
    }
  }

  useEffect(() => {
    if (windowWidth >= DESKTOP_WIDTH) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, MOVIE_COUNT_DESKTOP + desktopDelta))
      if (filmsArr.length <= 12) {
        setButtonMoreVisible(false)
      }
    } else if (windowWidth >= TABLET_WIDTH) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, MOVIE_COUNT_TABLET + tabletDelta))
      if (filmsArr.length <= 8) {
        setButtonMoreVisible(false)
      }
    } else if (MOBILE_WIDTH <= windowWidth <= LESS_TABLET_WIDTH) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, MOVIE_COUNT_MOBILE + mobileDelta))
      if (filmsArr.length <= 5) {
        setButtonMoreVisible(false)
      }
    }

  }, [filmsArr, props.newSearch, windowWidth])

  useEffect(() => {
    if (props.isSearched && props.searchedSavedMovies.length === 0) {
      props.setNotFoundMessage(true)
      setInitialMovies([])
    } else {
      props.setNotFoundMessage(false)
      setInitialMovies(props.searchedSavedMovies)
    }
  }, [props.isSearched, props.searchedSavedMovies])

  return (
    <>

      <ul className="MoviesCardList">

        {initialMovies.map((film, i) => (
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
      {buttonMoreVisible &&
        <button
          className="MoviesCardList__more"
          onClick={addMovies}>
          Ещё
        </button>
      }
    </>
  );
}

export default MoviesCardList;