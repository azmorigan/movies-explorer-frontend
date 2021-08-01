import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Login.css';
import { useState } from 'react';

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleLogin(email, password)
  }

  return (
    <Entry
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      path="/signup"
      inputsContainer="Entry__inputsContainer_type_login">
      <InputForm
        onChange={handleChangeEmail}
        value={email}
        label="E-mail"
        id="signinEmail"
        type="text" />
      <InputForm
        onChange={handleChangePassword}
        value={password}
        label="Пароль"
        id="signinPassword"
        type="password" />
    </Entry>
  );
}

export default Login;