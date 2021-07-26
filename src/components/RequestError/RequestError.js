import './RequestError.css';

function RequestError(props) {
  return (
    <p className={`RequestError ${props.className}`}>Вы ввели неправильный логин или пароль.</p>
  );
}

export default RequestError;