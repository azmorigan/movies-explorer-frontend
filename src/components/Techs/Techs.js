import Headline from '../Headline/Headline';
import './Techs.css';

const listOfTechs = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB'
]

function Techs() {
  return (
    <section className="Techs">
      <div className="Techs__container">
        <Headline>Технологии</Headline>
        <h2 className="Techs__title">7 Технологий</h2>
        <p className="Techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="Techs__list">
          {listOfTechs.map((item, i) => (
            <li key={i} className="Techs__item">
              <p className="Techs__element">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;