import './InputForm.css';

function InputForm(props) {

  return (
    <div className="InputForm">
      <label
        className="InputForm__label"
        htmlFor={props.id}>{props.label}
      </label>
      <input
        required
        className="InputForm__input"
        onChange={props.onChange}
        value={props.value}
        {...props} />
      <span className="InputForm_error">{props.errors}</span>
    </div>
  );
}

export default InputForm;