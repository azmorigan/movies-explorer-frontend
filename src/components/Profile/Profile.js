import './Profile.css';
import { useState } from 'react';

function Profile(props) {

  const [name, setName] = useState('userName');
  const [email, setEmail] = useState('userEmail')

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <form className="Profile">
      <h2 className="Profile__title">Привет, userName!</h2>
      <div className="Profile__field">
        <label
          className="Profile__label"
          htmlFor="profileName">Имя
        </label>
        <input
          className="Profile__input"
          type="text"
          id="profileName"
          value={name}
          onChange={handleChangeName} />
      </div>

      <div className="Profile__field">
        <label
          className="Profile__label"
          htmlFor="profileEmail">E-mail
        </label>
        <input
          className="Profile__input"
          type="text"
          id="profileEmail"
          value={email}
          onChange={handleChangeEmail} />
      </div>

      <button
        type="submit"
        className="Profile__edit">Редактировать
      </button>

      <button
        className="Profile__logout">Выйти из аккаунта
      </button>

    </form >
  );
}

export default Profile;