import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Login.css';

function Login(props) {
  return (
    <Entry
      title="Рады видеть!"
      buttonName="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      path="/signup"
      inputsContainer="Entry__inputsContainer_type_login"
    >
      <InputForm
        label="E-mail"
        id="signinEmail"
        type="text" />
      <InputForm
        label="Пароль"
        id="signinPassword"
        type="password" />

    </Entry>
  );
}

export default Login;