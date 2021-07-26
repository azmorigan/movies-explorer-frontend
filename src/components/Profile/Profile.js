import './Profile.css';
import { useState } from 'react';
import RequestError from '../RequestError/RequestError';

function Profile(props) {

  const [name, setName] = useState('userName');
  const [email, setEmail] = useState('userEmail');
  const [disabledInput, setDisabledInput] = useState(true)
  const [clickOnEdit, setClickOnEdit] = useState(false);

  function openEditForm() {
    setClickOnEdit(true)
    setDisabledInput(false)
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <form className="Profile" noValidate>
      <RequestError className="RequestError_type_edit" />
      <h2 className="Profile__title">Привет, userName!</h2>
      <div className="Profile__field">
        <label
          className="Profile__label"
          htmlFor="profileName">Имя
        </label>
        <input
          disabled={disabledInput}
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
          disabled={disabledInput}
          className="Profile__input"
          type="text"
          id="profileEmail"
          value={email}
          onChange={handleChangeEmail} />
      </div>

      {clickOnEdit
        ? <button
          type="submit"
          className="Profile__saveButton">
          Сохранить
        </button>
        : <>
          <button
            className="Profile__edit"
            onClick={openEditForm}>
            Редактировать
          </button>

          <button
            className="Profile__logout">Выйти из аккаунта
          </button>
        </>

      }




    </form >
  );
}

export default Profile;