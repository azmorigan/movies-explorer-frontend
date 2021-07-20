import Headline from '../Headline/Headline';
import './AboutMe.css';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className="AboutMe">
      <Headline>Студент</Headline>
      <div className="AboutMe__container">
        <div className="AboutMe__info">
          <h2 className="AboutMe__title">Виталий</h2>
          <h4 className="AboutMe__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="AboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="AboutMe__links">
            <a className="AboutMe__link" href="#">Facebook</a>
            <a className="AboutMe__link" href="#">Github</a>
          </div>
        </div>
        <img className="AboutMe__photo" src={photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;