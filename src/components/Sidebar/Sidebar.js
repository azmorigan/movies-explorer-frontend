import { NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import CloseButton from '../CloseButton/CloseButton';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div className={`Sidebar ${props.isOpen && 'Sidebar_visible'}`}>
      <div className="Sidebar__container" >
        <div className="Sidebar__links">
          <NavLink
            exact
            className="Sidebar__link"
            activeClassName="Sidebar__link_opened"
            to="/">Главная
          </NavLink>
          <NavLink
            exact
            className="Sidebar__link"
            activeClassName="Sidebar__link_opened"
            to="/movies">Фильмы
          </NavLink>
          <NavLink
            exact
            className="Sidebar__link"
            activeClassName="Sidebar__link_opened"
            to="/saved-movies">Сохраненные фильмы
          </NavLink>
        </div>

        <AccountButton className="AccountButton_type_sidebar" />
        <CloseButton onClose={props.onClose} />

      </div >
    </div >
  );
}

export default Sidebar;