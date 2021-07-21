import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </Main>
      {/* <main>


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

      </main> */}
    </div>
  );
}

export default App;
