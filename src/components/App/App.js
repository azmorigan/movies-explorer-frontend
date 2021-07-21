import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

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
      <Footer />
      {/* <main>

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
