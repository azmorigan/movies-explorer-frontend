import './Profile.css';
import { useState, useContext, useEffect } from 'react';
import RequestError from '../RequestError/RequestError';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } = useForm()

  const [disabledInput, setDisabledInput] = useState(true)
  const [clickOnEdit, setClickOnEdit] = useState(false);

  function openEditForm() {
    setClickOnEdit(true)
    setDisabledInput(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onEditUser({
      name: values.profileName,
      email: values.profileEmail,
    })
    setClickOnEdit(false)
  }

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [resetForm])

  return (
    <form
      onSubmit={handleSubmit}
      className="Profile">
      <RequestError className="RequestError_type_edit" />
      <h2 className="Profile__title">Привет, {currentUser.name}!</h2>

      <div className="Profile__field">
        <label
          className="Profile__label"
          htmlFor="profileName">Имя
        </label>
        <input
          required
          disabled={disabledInput}
          className="Profile__input"
          type="text"
          id="profileName"
          value={values.profileName || ''}
          onChange={handleChange}
          placeholder={currentUser.name}
          defaultValue={currentUser.name} />
      </div>
      <span className="Profile__error">{errors.profileName}</span>

      <div className="Profile__field">
        <label
          className="Profile__label"
          htmlFor="profileEmail">E-mail
        </label>
        <input
          required
          disabled={disabledInput}
          className="Profile__input"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
          id="profileEmail"
          value={values.profileEmail || ''}
          onChange={handleChange}
          placeholder={currentUser.email}
          defaultValue={currentUser.email} />
      </div>
      <span className="Profile__error">{errors.profileEmail}</span>

      {clickOnEdit
        ? <button
          disabled={!isValid}
          type="submit"
          className={`Profile__saveButton ${!isValid && 'Profile__saveButton_disabled'}`}>
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