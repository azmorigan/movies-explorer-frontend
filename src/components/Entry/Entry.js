import RequestError from '../RequestError/RequestError';
import './Entry.css';
import { Link } from 'react-router-dom';

function Entry(props) {
  return (
    <form
      onFocus={props.onClearError}
      className="Entry"
      onSubmit={props.onSubmit}
      noValidate>
      <RequestError
        error={props.error}
        className="RequestError_type_entry" />
      <Link to='/' className="Entry__logo" />
      <h2 className="Entry__title">{props.title}</h2>
      <div className={`Entry__inputsContainer ${props.inputsContainer}`}>
        {props.children}
      </div>
      <button
        disabled={props.isDisabled}
        type="submit"
        className={`Entry__button ${props.isDisabled && 'Entry__button_disabled'}`}>
        {props.buttonName}
      </button>
      <p className="Entry__question">{props.question}
        <Link
          to={props.path}
          className="Entry__link"> {props.linkText}</Link>
      </p>
    </form>
  );
}

export default Entry;