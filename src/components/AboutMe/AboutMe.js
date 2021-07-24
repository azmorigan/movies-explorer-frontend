import Headline from '../Headline/Headline';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="AboutMe">
      <Headline>Студент</Headline>
      <div className="AboutMe__container">
        <div className="AboutMe__info">
          <h2 className="AboutMe__title">Ринчин</h2>
          <h4 className="AboutMe__subtitle">Фронтенд-разработчик, 22 года</h4>
          <p className="AboutMe__text">Живу в Москве. Закончил МИРЭА по направлению Информатика и вычислительная техника. Вместо магистратуры решил пройти курс по веб-разработке. Сейчас делаю дипломную работу и активно ищу работу. В свободное время люблю читать или слушать книги, увлекаюсь дизайном, минимализмом и урбанистикой.</p>
          <div className="AboutMe__links">
            <a
              className="AboutMe__link"
              href="https://github.com/azmorigan"
              target="blank"
              rel="noreferrer">Github</a>
            <a
              className="AboutMe__link"
              href="https://t.me/azmorigan"
              target="blank"
              rel="noreferrer">Telegram</a>
          </div>
        </div>
        <img className="AboutMe__photo" src={photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;