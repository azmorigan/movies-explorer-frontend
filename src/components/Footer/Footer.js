import './Footer.css';
import Navigation from '../Navigation/Navigation';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p className="Footer__sign">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="Footer__box">
          <p className="Footer__copyright">&copy; 2021</p>
          <Navigation className="Navigation_type_footer">
            <a
              className="Footer_link"
              href="https://praktikum.yandex.ru"
              target="blank"
              rel="noreferrer">Яндекс.Практикум</a>
            <a
              className="Footer_link"
              href="https://github.com/azmorigan"
              target="blank"
              rel="noreferrer">Github</a>
            <a
              className="Footer_link"
              href="https://t.me/azmorigan"
              target="blank"
              rel="noreferrer">Telegram</a>
          </Navigation>
        </div>
      </div>
    </footer>
  );
}

export default Footer;