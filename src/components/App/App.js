import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { MoviesApi } from '../../utils/MoviesApi';

function App() {

  const [foundMovies, setFoundMovies] = useState([])

  function searchMovies(query) {
    return MoviesApi.getMovies()
      .then(result => result.filter((item) => new RegExp(query, "gi").test(item.nameEN) || new RegExp(query, "gi").test(item.nameRU)))
      .then(res => setFoundMovies(res))
  }

  const [loggedIn, setLoggedIn] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeAnyPopup() {
    setIsSidebarOpen(false)
  }

  return (
    <div className="App">
      <Switch>

        {/* Войти */}
        <Route path="/signin">
          <Login />
        </Route>

        {/* Зарегистрироваться */}
        <Route path="/signup">
          <Register />
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
          <Profile />
        </Route>

        {/* Фильмы */}
        <Route path="/movies">
          <Header
            loggedIn={loggedIn}
            bc="Header_type_app"
            openSidebar={openSidebar} />
          <SearchForm onSearchFilms={searchMovies} />
          <Movies films={foundMovies} />
          <Footer />
        </Route>

        {/* Сохраненные фильмы */}
        <Route path="/saved-movies">
          <Header
            loggedIn={loggedIn}
            bc="Header_type_app"
            openSidebar={openSidebar} />
          <SearchForm />
          <SavedMovies />
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
  );
}

export default App;
