import './Header.css';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';


function Header(props) {
  return (
    <header className={`Header ${props.loggedIn && 'Header_loggedIn'}`}>
      <div className="Header__container">
        <a className="Header__logo" href="#"></a>
        <Navigation>
          <Button>Регистрация</Button>
          <Button className="Button_type_landing">Войти</Button>
        </Navigation>
      </div>
    </header>
  );
}

export default Header;