import './MoviesCard.css';

function like(params) {

}


function MoviesCard(props) {
  return (
    <li className="MoviesCard">
      <a className="MoviesCard__link">
        <img className="MoviesCard__image" src={props.img} alt={props.name} />
      </a>
      <div className="MoviesCard__data">
        <div className="MoviesCard__info">
          <h3 className="MoviesCard__title">{props.name}</h3>
          <p className="MoviesCard__duration">{props.duration}</p>
        </div>
        <button
          className="MoviesCard__like " />
      </div>
    </li>
  );
}

export default MoviesCard;