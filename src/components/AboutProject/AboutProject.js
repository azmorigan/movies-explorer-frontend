import Headline from '../Headline/Headline';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="AboutProject">
      <Headline>О проекте</Headline>
      <div className="AboutProject__info">
        <div className="AboutProject__conditions">
          <h4 className="AboutProject__subtitle">Дипломный проект включал 5 этапов</h4>
          <p className="AboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="AboutProject__conditions">
          <h4 className="AboutProject__subtitle">На выполнение диплома ушло 5 недель</h4>
          <p className="AboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="AboutProject__progress">
        <div className="AboutProject__duration AboutProject__duration_type_backend">
          <p className="AboutProject__time">1 неделя</p>
        </div>
        <div className="AboutProject__duration AboutProject__duration_type_frontend">
          <p className="AboutProject__time">4 недели</p>
        </div>
        <p className="AboutProject__stage">Back-end</p>
        <p className="AboutProject__stage">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;