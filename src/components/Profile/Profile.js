import './Profile.css';
import { useState, useContext, useEffect, useCallback } from 'react';
import RequestError from '../RequestError/RequestError';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isValid, setIsValid] = useState(false)

  const [disabledInput, setDisabledInput] = useState(true)
  const [clickOnEdit, setClickOnEdit] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value)
    setNameError(e.target.validationMessage)
    setIsValid(e.target.closest("form").checkValidity())
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
    setEmailError(e.target.validationMessage)
    setIsValid(e.target.closest("form").checkValidity())
  }


  function openEditForm() {
    setClickOnEdit(true)
    setDisabledInput(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onEditUser({ name, email })
    setClickOnEdit(false)
    setDisabledInput(true)
  }

  function cancelEditUser() {
    setClickOnEdit(false)
    setDisabledInput(true)
  }

  const resetForm = useCallback(
    () => {
      setName(currentUser.name)
      setEmail(currentUser.email)
      setNameError('')
      setEmailError('')
      setIsValid(false)
    },
    [currentUser.name, currentUser.email],
  )

  useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
    return () => {
      resetForm()
    }
  }, [resetForm, clickOnEdit, currentUser.name, currentUser.email])

  return (
    <form
      onFocus={props.onClearError}
      onSubmit={handleSubmit}
      className="Profile"
      noValidate>
      <RequestError
        error={props.error}
        className="RequestError_type_edit" />

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
          value={name}
          onChange={handleChangeName} />
      </div>
      <span className="Profile__error">{nameError}</span>

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
          value={email}
          onChange={handleChangeEmail} />
      </div>
      <span className="Profile__error">{emailError}</span>

      {clickOnEdit
        ? <>
          <button
            disabled={!isValid}
            type="submit"
            className={`Profile__saveButton ${!isValid && 'Profile__saveButton_disabled'}`}>
            Сохранить
          </button>
          <button
            type="button"
            className="Profile__cancelButton"
            onClick={cancelEditUser}>Отменить</button>
        </>
        : <>
          <button
            type="button"
            className="Profile__edit"
            onClick={openEditForm}>
            Редактировать
          </button>

          <button
            type="button"
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