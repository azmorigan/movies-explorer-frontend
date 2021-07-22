import './Portfolio.css';

function Portfolio() {
  return (
    <section className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <a
        className="Portfolio__link"
        href="https://azmorigan.github.io/how-to-learn/"
        target="blank"
        rel="noreferrer">
        <p className="Portfolio__project">Статичный сайт</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
          <path
            fill="#000"
            d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
          ></path>
        </svg>
      </a>
      <a
        className="Portfolio__link"
        href="https://azmorigan.github.io/russian-travel/"
        target="blank"
        rel="noreferrer">
        <p className="Portfolio__project">Адаптивный сайт</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
          <path
            fill="#000"
            d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
          ></path>
        </svg>
      </a>
      <a
        className="Portfolio__link"
        href="https://mesto-front.azmorigan.nomoredomains.club/"
        target="blank"
        rel="noreferrer">
        <p className="Portfolio__project">Одностраничное приложение</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
          <path
            fill="#000"
            d="M2.607 16.524L14.965 4.145l-.021 9.545h2.322V.182H3.778l-.021 2.301h9.546L.945 14.862l1.662 1.662z"
          ></path>
        </svg>
      </a>
    </section>
  );
}

export default Portfolio;