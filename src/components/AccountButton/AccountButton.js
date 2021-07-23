import { Link } from 'react-router-dom';
import './AccountButton.css';

function AccountButton(props) {
  return (
    <Link className={`AccountButton ${props.className}`} to="/profile">
      <p className="AccountButton__title">Аккаунт</p>
      <div className="AccountButton__icon" />
    </Link>
  );
}

export default AccountButton;