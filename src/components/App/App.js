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
import { useState } from 'react';

function App() {

  const [loggedIn, setloggedIn] = useState(true);


  return (
    <div className="App">
      <Switch>

        {/* Войти */}
        <Route path="/signin">

        </Route>

        {/* Зарегистрироваться */}
        <Route path="/signup">

        </Route>

        {/* О проекте */}
        <Route exact path="/">
          <Header loggedIn={loggedIn} />
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
          <Header loggedIn={loggedIn} bc="Header_type_app" />
        </Route>

        {/* Фильмы */}
        <Route path="/movies">
          <Header loggedIn={loggedIn} bc="Header_type_app" />
          <Footer />
        </Route>

        {/* Сохраненные фильмы */}
        <Route path="/saved-movies" >
          <Header loggedIn={loggedIn} bc="Header_type_app" />
          <Footer />
        </Route>



      </Switch>


    </div>
  );
}

export default App;
