import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage(props) {
  return (
    <div className="NotFoundPage">
      <h2 className="NotFoundPage__title">404</h2>
      <p className="NotFoundPage__text">Страница не найдена</p>
      <Link to="/movies" className="NotFoundPage__link">Назад</Link>
    </div>
  );
}

export default NotFoundPage;