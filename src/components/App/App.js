import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
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
  // Ошибка запроса
  const [error, setError] = useState('')
  // Тумблер
  const [tumblerState, setTumblerState] = useState(false)
  // Результаты поиска в сохраненных фильмах
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([])
  // Был ли поиск
  const [isSearched, setIsSearched] = useState(false)
  const history = useHistory()

  // Загрузка прелоадера
  function renderLoading(value) {
    setIsLoading(value)
  }

  // Найти фильм по ключевому слову
  function searchFilmsByWord(arr, query) {
    return arr.filter(item => {
      if (item.nameEN === null || item.nameRU === null) {
        return;
      }
      return item.nameEN.toLowerCase().includes(query.toLowerCase()) || item.nameRU.toLowerCase().includes(query.toLowerCase())
    }
    )
  }

  // Проверка массива фильмов на пустоту
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

  // Отрендерить фильмы при входе из локального хранилища
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
        handleLogin({ email: res.email, password })
      })
      .catch(err => setError(err.message))
  }

  // Авторизация
  function handleLogin({ email, password }) {
    auth.authorize(email, password)
      .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        setLoggedIn(true)
        history.push('/movies')
      })
      .catch(err => setError(err.message))
  }

  // Работа токена
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
        })
        .catch(err => console.log(err))
    }
  }

  // Выход из аккаунта
  function handleSignOut() {
    localStorage.removeItem('jwt')
    localStorage.removeItem('allFilms')
    localStorage.removeItem('userSearchFilms')
    history.push('/')
    setLoggedIn(false)
  }

  // Получить фильмы пользователя
  function getMovies() {
    mainApi.getUserMovies(localStorage.getItem('jwt'))
      .then(res => {
        setSavedMovies(res)
      })
      .catch(err => console.log(err))
  }

  // Сохранить фильм 
  function saveMovie(movie) {
    mainApi.saveMovie(movie, localStorage.getItem('jwt'))
      .then(newMovie => {
        setSavedMovies([...savedMovies, newMovie])
      })
      .catch(err => console.log(err))
  }

  // Удалить фильм
  function handleMovieDelete(filmId) {
    mainApi.deleteMovie(filmId, localStorage.getItem('jwt'))
      .then((res) => {
        const newCards = savedMovies.filter(movie => movie.nameRU !== res.nameRU)
        setSavedMovies(newCards)
      })
      .catch(err => console.log(err))
  }

  // Удалить фильм со страницы '/movies'
  function handleDeleteSearchMovie(movie) {
    savedMovies.forEach(item => {
      if (item.nameRU === movie.nameRU) {
        handleMovieDelete(item._id)
      }
    })
  }

  // Очистить ошибку запроса
  function clearError() {
    setError('')
  }

  // Редактирование профиля
  function handleEditUser({ name, email }) {
    mainApi.editUser(name, email, localStorage.getItem('jwt'))
      .then(res => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        })
      })
      .catch(err => {
        setError(err.message)
      })
  }

  // Переключить тумблер
  function handleTumbler() {
    setTumblerState(!tumblerState)
  }

  // Поиск в сохраненных фильмах
  function searchSavedFilms(query, isClicked) {
    setIsSearched(isClicked)
    setSearchedSavedMovies(searchFilmsByWord(savedMovies, query))
  }

  useEffect(() => {
    getMovies()
    handleTokenCheck()
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>


        <div className="App">
          <Switch>

            {/* Зарегистрироваться */}
            <Route path="/signup">
              <Register
                handleRegister={handleRegister}
                onClearError={clearError}
                error={error} />
            </Route>

            {/* Войти */}
            <Route path="/signin">
              <Login
                handleLogin={handleLogin}
                onClearError={clearError}
                error={error} />
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
            <Route exact path="/profile">
              <Header
                loggedIn={loggedIn}
                bc="Header_type_app"
                openSidebar={openSidebar} />
              <ProtectedRoute
                onClearError={clearError}
                error={error}
                onEditUser={handleEditUser}
                onSignOut={handleSignOut}
                component={Profile}
                loggedIn={loggedIn} />
            </Route>


            {/* Фильмы */}
            <Route exact path="/movies">
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
            <Route exact path="/saved-movies">
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

            <Route path="*">
              <NotFoundPage />
            </Route>

          </Switch>

          <Sidebar
            isOpen={isSidebarOpen}
            onClose={closeAnyPopup} />

        </div>

      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
