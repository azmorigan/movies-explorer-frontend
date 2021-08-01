import './InputForm.css';
import { useState } from 'react';

function InputForm(props) {

  function handleChange(e) {
    props.onChange(e)
  }

  return (
    <div className="InputForm">
      <label
        className="InputForm__label"
        htmlFor={props.id}>{props.label}
      </label>
      <input
        required
        className="InputForm__input"
        onChange={handleChange}
        {...props} />
    </div>
  );
}

export default InputForm;