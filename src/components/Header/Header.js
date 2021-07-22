import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`Header ${props.loggedIn && 'Header_loggedIn'}`}>
      <div className="Header__container">
        <Link className="Header__logo" to="/"></Link>

        {props.loggedIn ?
          <Navigation>
            <Link className="" to="/movies">Фильмы</Link>
            <Link className="" to="/saved-movies">Сохраненные фильмы</Link>
            <Link className="" to="/profile">Аккаунт</Link>
          </Navigation> :
          <Navigation>
            <Link className="Header__link" to="/signup">Регистрация</Link>
            <Link className="Header__link Header__link_type_signIn" to="/signin">Войти</Link>
          </Navigation>
        }

      </div>
    </header>
  );
}

export default Header;