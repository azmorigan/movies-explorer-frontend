import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Register.css';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

function Register(props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm()

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [resetForm])

  function handleSubmit(e) {
    e.preventDefault()
    props.handleRegister({
      name: values.signupName,
      email: values.signupEmail,
      password: values.signupPassword,
    })
  }

  return (
    <Entry
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      path="/signin"
      isDisabled={!isValid}
      onClearError={props.onClearError}
      error={props.error}>
      <InputForm
        onChange={handleChange}
        value={values.signupName || ''}
        label="Имя"
        id="signupName"
        pattern="[A-Za-zА-Яа-яёЁ -]+"
        type="text"
        errors={errors.signupName} />
      <InputForm
        onChange={handleChange}
        value={values.signupEmail || ''}
        label="E-mail"
        id="signupEmail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        type="email"
        errors={errors.signupEmail} />
      <InputForm
        onChange={handleChange}
        value={values.signupPassword || ''}
        label="Пароль"
        id="signupPassword"
        type="password"
        errors={errors.signupPassword} />
    </Entry>
  );
}

export default Register;