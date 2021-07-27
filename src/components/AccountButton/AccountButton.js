import { Link } from 'react-router-dom';
import './AccountButton.css';

function AccountButton(props) {
  return (
    <Link
      className={`AccountButton ${props.mainPage && 'AccountButton_type_mainPage'}`}
      to="/profile">
      <p className={`AccountButton__title ${props.mainPage && 'AccountButton__title_type_mainPage'}`}>Аккаунт</p>
      <div className="AccountButton__icon" />
    </Link>
  );
}

export default AccountButton;