import './Promo.css';
import poster from '../../images/landing-logo.svg';
import Button from '../Button/Button';

function Promo() {
  return (
    <section className="Promo">
      <div className="Promo__container">
        <div className="Promo__info">
          <h1 className="Promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="Promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <img className="Promo__img" src={poster} alt="Земля"></img>
        </div>
        <Button className="Button_type_promo">Узнать больше</Button>
      </div>
    </section >
  );
}

export default Promo;