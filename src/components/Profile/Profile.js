import './Profile.css';
import { useState, useContext } from 'react';
import RequestError from '../RequestError/RequestError';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

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

  function handleSubmit(e) {
    e.preventDefault()
    props.onEditUser({ name, email })
    setClickOnEdit(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="Profile"
      noValidate>
      <RequestError className="RequestError_type_edit" />
      <h2 className="Profile__title">Привет, {name}!</h2>
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
            className="Profile__logout"
            onClick={props.onSignOut}>
            Выйти из аккаунта
          </button>
        </>

      }




    </form >
  );
}

export default Profile;