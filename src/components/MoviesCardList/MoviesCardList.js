import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const testCards = [
  {
    name: "Хоббит: Нежданное путешествие",
    img: "https://million-wallpapers.ru/wallpapers/1/0/430087956000929/bilbo-beggins-iz-xobbita.jpg",
    duration: 169,
  },

  {
    name: "Хоббит: Нежданное путешествие",
    img: "https://million-wallpapers.ru/wallpapers/1/0/430087956000929/bilbo-beggins-iz-xobbita.jpg",
    duration: 169,
  },

  {
    name: "Хоббит: Нежданное путешествие",
    img: "https://million-wallpapers.ru/wallpapers/1/0/430087956000929/bilbo-beggins-iz-xobbita.jpg",
    duration: 169,
  },

  {
    name: "Хоббит: Нежданное путешествие bbbbbbbbbbbbfhfhfhf",
    img: "https://million-wallpapers.ru/wallpapers/1/0/430087956000929/bilbo-beggins-iz-xobbita.jpg",
    duration: 169,
  },
]

function MoviesCardList(props) {
  return (
    <ul className="MoviesCardList">
      {testCards.map((card, i) => (
        <MoviesCard
          name={card.name}
          img={card.img}
          duration={card.duration}
          key={i} />
      ))}
    </ul>
  );
}

export default MoviesCardList;