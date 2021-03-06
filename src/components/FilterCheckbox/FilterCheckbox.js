import './FilterCheckbox.css';

function FilterCheckbox(props) {

  function handleChangeCheckbox() {
    props.onTumbler()
  }

  return (
    <div className={`FilterCheckbox ${props.className}`}>
      <label className="FilterCheckbox__case">
        <input
          onChange={handleChangeCheckbox}
          className="FilterCheckbox__tumbler"
          type="checkbox" />
        <span className="FilterCheckbox__pseudo-tumbler"></span>
      </label >
      <p className="FilterCheckbox__title">Короткометражки</p>
    </div >
  );
}

export default FilterCheckbox;