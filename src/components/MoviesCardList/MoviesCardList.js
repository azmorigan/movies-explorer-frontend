import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const filmsArr = props.films
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [initialMovies, setInitialMovies] = useState([])

  let extraMovies
  const movieCountDesktop = 12
  const movieCountTablet = 8
  const movieCountMobile = 5

  const [k1, setK1] = useState(0)
  const [k2, setK2] = useState(0)
  const [k3, setK3] = useState(0)

  const [buttonMoreVisible, setButtonMoreVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => setTimeout(() => setWindowWidth(window.innerWidth), 1000)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  function addMovies() {

    if (windowWidth >= 1280 && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(12 + k1, 12 + k1 + 3)
      setInitialMovies([...initialMovies, ...extraMovies])
      setK1(k1 + 3)
      if (filmsArr.length - k1 - 12 < 4) {
        setButtonMoreVisible(false)
      }

    } else if (windowWidth >= 768 && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(8 + k2, 8 + k2 + 2)
      setInitialMovies([...initialMovies, ...extraMovies])
      setK2(k2 + 2)
      if (filmsArr.length - k2 - 8 < 3) {
        setButtonMoreVisible(false)
      }

    } else if (320 <= windowWidth <= 767 && filmsArr.length - initialMovies.length !== 0) {

      extraMovies = filmsArr.slice(k3 + 5, k3 + 5 + 1)
      setInitialMovies([...initialMovies, ...extraMovies])
      setK3(k3 + 1)
      if (filmsArr.length - k3 - 5 < 2) {
        setButtonMoreVisible(false)
      }
    }
  }

  useEffect(() => {
    if (windowWidth >= 1280) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, movieCountDesktop + k1))
      if (filmsArr.length <= 12) {
        setButtonMoreVisible(false)
      }
    } else if (windowWidth >= 768) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, movieCountTablet + k2))
      if (filmsArr.length <= 8) {
        setButtonMoreVisible(false)
      }
    } else if (320 <= windowWidth <= 767) {
      setButtonMoreVisible(true)
      setInitialMovies(filmsArr.slice(0, movieCountMobile + k3))
      if (filmsArr.length <= 5) {
        setButtonMoreVisible(false)
      }
    }

  }, [filmsArr, movieCountDesktop, movieCountMobile, movieCountTablet, props.newSearch, windowWidth])

  useEffect(() => {
    props.isSearched && setInitialMovies(props.searchedSavedMovies)
  }, [props.isSearched, props.searchedSavedMovies])

  // function filterShortMovies(arr) {
  //   const shortMovies = arr.filter(item => item.duration <= 40)
  //   console.log(shortMovies);
  //   return shortMovies
  // }

  // useEffect(() => {
  //   function filter() {
  //     const allMovies = initialMovies
  //     props.tumblerState ? setInitialMovies(filterShortMovies(initialMovies))
  //       : setInitialMovies(allMovies)
  //   }
  //   filter()
  // }, [props.tumblerState])


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