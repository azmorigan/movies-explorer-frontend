import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';

function Header(props) {
  return (

    <header className={`Header ${props.bc}`}>
      <div className="Header__container">
        <Link className="Header__logo" to="/" />


        {!props.loggedIn

          ? <Navigation>
            <Link className="Header__link" to="/signup">Регистрация</Link>
            <Link className="Header__link Header__link_type_signIn" to="/signin">Войти</Link>
          </Navigation>

          : <Navigation>
            <Switch>

              <Route exact path="/">
                <NavLink
                  className="Header__film Header__film_type_main"
                  activeClassName="Header__film_opened"
                  to="/movies">
                  Фильмы
                </NavLink>
                <NavLink
                  className="Header__film Header__film_type_main"
                  activeClassName="Header__film_opened"
                  to="/saved-movies">
                  Сохраненные фильмы</NavLink>
                <AccountButton mainPage={true} />
                <button
                  className="Header__burger"
                  onClick={props.openSidebar}></button>
              </Route>

              <Route>
                <NavLink
                  className="Header__film"
                  activeClassName="Header__film_opened"
                  to="/movies">
                  Фильмы
                </NavLink>
                <NavLink
                  className="Header__film"
                  activeClassName="Header__film_opened"
                  to="/saved-movies">
                  Сохраненные фильмы</NavLink>
                <AccountButton />
                <button
                  className="Header__burger"
                  onClick={props.openSidebar}></button>
              </Route>

            </Switch>
          </Navigation>
        }

      </div>
    </header >
  );
}

export default Header;