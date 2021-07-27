import './InputForm.css';
import { useState } from 'react';

function InputForm(props) {

  const [inputValue, setInputValue] = useState('')

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div className="InputForm">
      <label
        className="InputForm__label"
        htmlFor={props.id}>{props.label}
      </label>
      <input
        id={props.id}
        className="InputForm__input"
        type={props.type}
        onChange={handleChange}
        value={inputValue} />
    </div>
  );
}

export default InputForm;