import Entry from '../Entry/Entry';
import InputForm from '../InputForm/InputForm';
import './Register.css';

function Register(props) {
  return (
    <Entry
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      path="/signin">
      <InputForm
        label="Имя"
        id="signupName" />
      <InputForm
        label="E-mail"
        id="signupEmail" />
      <InputForm
        label="Пароль"
        id="signupPassword" />

    </Entry>
  );
}

export default Register;