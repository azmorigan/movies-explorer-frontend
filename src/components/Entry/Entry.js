import './Entry.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Entry(props) {
  return (
    <form className="Entry">
      <Link to='/' className="Entry__logo" />
      <h2 className="Entry__title">{props.title}</h2>
      <div className={`Entry__inputsContainer ${props.inputsContainer}`}>
        {props.children}
      </div>
      <button type="submit" className="Entry__button">{props.buttonName}</button>
      <p className="Entry__question">{props.question}
        <Link
          to={props.path}
          className="Entry__link"> {props.linkText}</Link>
      </p>
    </form>
  );
}

export default Entry;