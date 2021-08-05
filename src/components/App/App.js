import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function App() {
  // Данные профиля
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  })
  // Найденные фильмы по запросу
  const [foundMovies, setFoundMovies] = useState([])
  // Сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([])
  // Состояние сообщения "Ничего не найдено"
  const [notFoundFilmsMessage, setNotFoundFilmsMessage] = useState(false)
  // Состояние прелоадера
  const [isLoading, setIsLoading] = useState(false)
  // Залогинен ли пользователь.
  const [loggedIn, setLoggedIn] = useState(false);
  // Открыт ли сайдбар.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const history = useHistory()

  function renderLoading(value) {
    setIsLoading(value)
  }

  function searchFilmsByWord(arr, query) {
    return arr.filter(item => {
      if (item.nameEN === null || item.nameRU === null) {
        return;
      }
      return item.nameEN.toLowerCase().includes(query.toLowerCase()) || item.nameRU.toLowerCase().includes(query.toLowerCase())
    }
    )
  }

  function checkArrForEmptiness(arr) {
    if (arr.length !== 0) {
      setFoundMovies(arr)
      localStorage.setItem("userSearchFilms", JSON.stringify(arr))
    } else {
      setNotFoundFilmsMessage(true)
      setFoundMovies([])
    }
  }

  // Найти фильмы по запросу на BeatFilmMovies
  function searchFilms(query) {
    setNotFoundFilmsMessage(false)
    if (localStorage.getItem('allFilms')) {
      const films = searchFilmsByWord(JSON.parse(localStorage.getItem('allFilms')), query)
      checkArrForEmptiness(films)
    } else {
      renderLoading(true)
      moviesApi.getMovies()
        .then(res => {
          localStorage.setItem("allFilms", JSON.stringify(res))
          return searchFilmsByWord(res, query)
        })
        .then(result => checkArrForEmptiness(result))
        .catch(err => console.log(err))
        .finally(() => {
          renderLoading(false)
        })
    }
  }

  function renderUserFilms() {
    if (localStorage.getItem('userSearchFilms')) {
      const userSearchFilms = JSON.parse(localStorage.getItem('userSearchFilms'))
      setFoundMovies(userSearchFilms)
    }
  }

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeAnyPopup() {
    setIsSidebarOpen(false)
  }

  // Регистрация
  function handleRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        handleLogin(res.email, password)
      })
      .catch(err => console.log(err))
  }

  // Авторизация
  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        setLoggedIn(true)
        history.push('/movies')
      })
      .catch(err => console.log(err))
  }

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt)
        .then(res => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          })
          setLoggedIn(true)
          history.push('/movies')
        })
        .catch(err => console.log(err))
    }
  }

  function handleSignOut() {
    localStorage.removeItem('jwt')
    localStorage.removeItem('allFilms')
    localStorage.removeItem('userSearchFilms')
    history.push('/')
    setLoggedIn(false)
  }

  function getMovies() {
    mainApi.getUserMovies(localStorage.getItem('jwt'))
      .then(res => {
        setSavedMovies(res)
      })
      .catch(err => console.log(err))
  }

  function saveMovie(movie) {
    mainApi.saveMovie(movie, localStorage.getItem('jwt'))
      .then(newMovie => {
        setSavedMovies([...savedMovies, newMovie])
      })
      .catch(err => console.log(err))
  }

  function handleMovieDelete(filmId) {
    mainApi.deleteMovie(filmId, localStorage.getItem('jwt'))
      .then((res) => {
        const newCards = savedMovies.filter(movie => movie.nameRU !== res.nameRU)
        setSavedMovies(newCards)
      })
      .catch(err => console.log(err))
  }

  function handleDeleteSearchMovie(movie) {
    savedMovies.forEach(item => {
      if (item.nameRU === movie.nameRU) {
        handleMovieDelete(item._id)
      }
    })
  }

  function handleEditUser({ name, email }) {
    mainApi.editUser(name, email, localStorage.getItem('jwt'))
      .then(res => {
        console.log(res)
        setCurrentUser({
          name: res.name,
          email: res.email,
        })
      })
  }

  // Тумблер
  const [tumblerState, setTumblerState] = useState(false)

  function handleTumbler() {
    setTumblerState(!tumblerState)
  }

  const [searchedSavedMovies, setSearchedSavedMovies] = useState([])
  const [isSearched, setIsSearched] = useState(false)

  function searchSavedFilms(query, isClicked) {
    setSearchedSavedMovies(searchFilmsByWord(savedMovies, query))
    setIsSearched(isClicked)
  }


  useEffect(() => {
    getMovies()
    handleTokenCheck()
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>


      <div className="App">
        <Switch>

          {/* Зарегистрироваться */}
          <Route path="/signup">
            <Register
              handleRegister={handleRegister} />
          </Route>

          {/* Войти */}
          <Route path="/signin">
            <Login
              handleLogin={handleLogin} />
          </Route>

          {/* О проекте */}
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              openSidebar={openSidebar} />
            <Main>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </Main>
            <Footer />
          </Route>

          {/* Профиль */}
          <Route path="/profile">
            <Header
              loggedIn={loggedIn}
              bc="Header_type_app"
              openSidebar={openSidebar} />
            <ProtectedRoute
              onEditUser={handleEditUser}
              onSignOut={handleSignOut}
              component={Profile}
              loggedIn={loggedIn} />
          </Route>


          <SavedMoviesContext.Provider value={savedMovies}>
            {/* Фильмы */}
            <Route path="/movies">
              <Header
                loggedIn={loggedIn}
                bc="Header_type_app"
                openSidebar={openSidebar} />
              <SearchForm
                onTumbler={handleTumbler}
                onSearchFilms={searchFilms} />
              <ProtectedRoute
                tumblerState={tumblerState}
                onDeleteSearchMovie={handleDeleteSearchMovie}
                component={Movies}
                loggedIn={loggedIn}
                films={foundMovies}
                notFoundFilms={notFoundFilmsMessage}
                onLoad={isLoading}
                onSaveMovie={saveMovie}
                onRenderFilms={renderUserFilms} />
              <Footer />
            </Route>



            {/* Сохраненные фильмы */}
            <Route path="/saved-movies">
              <Header
                loggedIn={loggedIn}
                bc="Header_type_app"
                openSidebar={openSidebar} />
              <SearchForm
                onSearchFilms={searchSavedFilms}
                onTumbler={handleTumbler} />
              <ProtectedRoute
                searchedSavedMovies={searchedSavedMovies}
                tumblerState={tumblerState}
                onDeleteMovie={handleMovieDelete}
                films={savedMovies}
                component={SavedMovies}
                loggedIn={loggedIn}
                isSearched={isSearched} />
              <Footer />
            </Route>

          </SavedMoviesContext.Provider>

          <Route path="*">
            <NotFoundPage />
          </Route>


        </Switch>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeAnyPopup} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
