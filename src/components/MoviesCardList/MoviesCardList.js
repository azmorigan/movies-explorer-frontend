import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {

  return (
    <ul className="MoviesCardList">
      {props.films.map((card) => (
        <MoviesCard
          name={card.nameRU}
          img={`https://api.nomoreparties.co${card.image.url}`}
          duration={card.duration}
          trailerLink={card.trailerLink}
          key={card.id} />
      ))}
    </ul>
  );
}

export default MoviesCardList;