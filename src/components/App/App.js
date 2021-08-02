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
import { MoviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  // Данные профиля
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  })
  // Найденные фильмы по запросу
  const [foundMovies, setFoundMovies] = useState([])
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
      return new RegExp(query, "gi").test(item.nameEN)
        || new RegExp(query, "gi").test(item.nameRU)
    })
  }

  function checkArrForEmptiness(arr) {
    if (arr.length !== 0) {
      setFoundMovies(arr)
      localStorage.setItem("userFilms", JSON.stringify(arr))
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
      MoviesApi.getMovies()
        .then(res => {
          localStorage.setItem("allFilms", JSON.stringify(res))
          return searchFilmsByWord(res, query)
        })
        .then(result => checkArrForEmptiness(result))
        .catch(err => console.log(err))
        .finally(() => renderLoading(false))
    }
  }

  function renderUserFilms() {
    if (localStorage.getItem('userFilms')) {
      const userFilms = JSON.parse(localStorage.getItem('userFilms'))
      setFoundMovies(userFilms)
    }
  }

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeAnyPopup() {
    setIsSidebarOpen(false)
  }

  // Регистрация
  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(res => {
        console.log(res)
        history.push('/signin')
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
    history.push('/')
    setLoggedIn(false)
  }

  useEffect(() => {
    handleTokenCheck()
  }, [])

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
              onSignOut={handleSignOut}
              component={Profile}
              loggedIn={loggedIn} />
          </Route>

          {/* Фильмы */}
          <Route path="/movies">
            <Header
              loggedIn={loggedIn}
              bc="Header_type_app"
              openSidebar={openSidebar} />
            <SearchForm
              onSearchFilms={searchFilms} />
            <ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
              films={foundMovies}
              notFoundFilms={notFoundFilmsMessage}
              onLoad={isLoading}
              onRenderFilms={renderUserFilms} />
            <Footer />
          </Route>

          {/* Сохраненные фильмы */}
          <Route path="/saved-movies">
            <Header
              loggedIn={loggedIn}
              bc="Header_type_app"
              openSidebar={openSidebar} />
            <SearchForm />
            <ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn} />
            <Footer />
          </Route>

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
