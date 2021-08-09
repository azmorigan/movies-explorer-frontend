import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Login.css';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

function Login(props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm()

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [resetForm])

  function handleSubmit(e) {
    e.preventDefault()
    props.handleLogin({
      email: values.signinEmail,
      password: values.signinPassword,
    })
  }

  return (
    <Entry
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      path="/signup"
      inputsContainer="Entry__inputsContainer_type_login"
      isDisabled={!isValid}
      onClearError={props.onClearError}
      error={props.error}>
      <InputForm
        onChange={handleChange}
        value={values.signinEmail || ''}
        label="E-mail"
        id="signinEmail"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        errors={errors.signinEmail} />
      <InputForm
        onChange={handleChange}
        value={values.signinPassword || ''}
        label="Пароль"
        id="signinPassword"
        type="password"
        errors={errors.signinPassword} />
    </Entry>
  );
}

export default Login;