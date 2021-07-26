import './Promo.css';
import poster from '../../images/landing-logo.svg';

function Promo() {

  const scrollToProject = () => {
    document.querySelector('.AboutProject').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  return (
    <section className="Promo">
      <div className="Promo__container">
        <div className="Promo__info">
          <h1 className="Promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="Promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <img className="Promo__img" src={poster} alt="планета Земля"></img>
        </div>
        <a onClick={scrollToProject} className="Promo__link" href="#AboutProject">Узнать больше</a>
      </div>
    </section >
  );
}

export default Promo;