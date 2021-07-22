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
    </div>
  );
}

export default App;
