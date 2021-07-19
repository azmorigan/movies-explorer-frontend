import './Header.css';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <header className="Header">
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