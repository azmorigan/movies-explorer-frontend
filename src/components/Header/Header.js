import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, Switch, Route, NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import CloseButton from '../CloseButton/CloseButton';

// Текущий роут
// let pagePath = window.location.pathname === ('/movies' || '/profile' || '/saved-movies') && window.location.pathname;


function Header(props) {
  return (

    <header className={`Header ${props.bc}`}>
      <div className="Header__container">
        <Link className="Header__logo" to="/" />

        <Switch>

          <Route exact path="/">
            {!props.loggedIn ?
              <Navigation>
                <Link className="Header__link" to="/signup">Регистрация</Link>
                <Link className="Header__link Header__link_type_signIn" to="/signin">Войти</Link>
              </Navigation> : <Link className="Header__link" to="/movies">В приложение &rarr;</Link>}
          </Route>

          <Route path={"/movies"}>
            <Navigation>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/movies">Фильмы</NavLink>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/saved-movies">Сохраненные фильмы</NavLink>
              <AccountButton />
              <button
                className="Header__burger"
                onClick={props.openSidebar}></button>
            </Navigation>
          </Route>

          <Route path={"/saved-movies"}>
            <Navigation>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/movies">Фильмы</NavLink>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/saved-movies">Сохраненные фильмы</NavLink>
              <AccountButton />
              <button
                className="Header__burger"
                onClick={props.openSidebar}></button>
            </Navigation>
          </Route>

          <Route path={"/profile"}>
            <Navigation>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/movies">Фильмы</NavLink>
              <NavLink className="Header__film" activeClassName="Header__film_opened" to="/saved-movies">Сохраненные фильмы</NavLink>
              <AccountButton />
              <button
                className="Header__burger"
                onClick={props.openSidebar}></button>
            </Navigation>
          </Route>

        </Switch>

      </div>
    </header >
  );
}

export default Header;