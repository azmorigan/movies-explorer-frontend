import { NavLink } from 'react-router-dom';
import './AccountButton.css';

function AccountButton(props) {
  return (
    <NavLink
      className={`AccountButton ${props.mainPage && 'AccountButton_type_mainPage'}`}
      activeClassName="AccountButton_active"
      to="/profile">
      <p className={`AccountButton__title ${props.mainPage && 'AccountButton__title_type_mainPage'}`}>Аккаунт</p>
      <div className="AccountButton__icon" />
    </NavLink>
  );
}

export default AccountButton;