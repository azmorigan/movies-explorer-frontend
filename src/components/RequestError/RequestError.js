import './RequestError.css';

function RequestError(props) {

  return (
    <p
      className={`RequestError ${props.className}`}>
      {props.error}
    </p>
  );
}

export default RequestError;