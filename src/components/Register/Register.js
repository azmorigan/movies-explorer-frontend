import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Register.css';
import { useState } from 'react';

function Register(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleRegister(name, email, password)
  }

  return (
    <Entry
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      path="/signin">
      <InputForm
        onChange={handleChangeName}
        value={name}
        label="Имя"
        id="signupName"
        type="text" />
      <InputForm
        onChange={handleChangeEmail}
        value={email}
        label="E-mail"
        id="signupEmail"
        type="text" />
      <InputForm
        onChange={handleChangePassword}
        value={password}
        label="Пароль"
        id="signupPassword"
        type="password" />
    </Entry>
  );
}

export default Register;