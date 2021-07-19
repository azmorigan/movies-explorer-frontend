import './App.css';
import poster from '../../images/landing-logo.svg';
import photo from '../../images/photo.png';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <section>
          <div>
            <h1>Учебный проект студента факультета Веб-разработки.</h1>
            <p>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <img src={poster} alt="Земля"></img>
          </div>
          <button>Узнать больше</button>
        </section>

        <section>
          <h3>О проекте</h3>
          <div>
            <div>
              <h4>Дипломный проект включал 5 этапов</h4>
              <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div>
              <h4>На выполнение диплома ушло 5 недель</h4>
              <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div>
              <p>1 неделя</p>
              <p>4 недели</p>
              <p>Back-end</p>
              <p>Front-end</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Технологии</h3>
          <h2>7 Технологий</h2>
          <p>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Git</li>
            <li>Express.js</li>
            <li>mongoDB</li>
          </ul>
        </section>

        <section>
          <h3>Студент</h3>
          <div>
            <div>
              <h2>Виталий</h2>
              <h4>Фронтенд-разработчик, 22 года</h4>
              <p>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              <p>Telegram</p>
              <p>Github</p>
            </div>
            <img src={photo} alt="Фото"></img>
          </div>
        </section>

        <section>
          <div>
            <p>Статичный сайт</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
              <path
                fill="#000"
                d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
              ></path>
            </svg>
          </div>
          <div>
            <p>Адаптивный сайт</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
              <path
                fill="#000"
                d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
              ></path>
            </svg>
          </div>
          <div>
            <p>Одностраничное приложение</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
              <path
                fill="#000"
                d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
              ></path>
            </svg>
          </div>
        </section>

        <footer>
          <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div>
            <p>© 2020</p>
            <nav>
              <ul>
                <li>Яндекс.Практикум</li>
                <li>Github</li>
                <li>Facebook</li>
              </ul>
            </nav>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
