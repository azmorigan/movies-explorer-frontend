import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className={`FilterCheckbox ${props.className}`}>
      < label className="FilterCheckbox__case" >
        <input
          className="FilterCheckbox__tumbler"
          type="checkbox" />
        <span className="FilterCheckbox__pseudo-tumbler"></span>
      </label >
      <p className="FilterCheckbox__title">Короткометражки</p>
    </div >
  );
}

export default FilterCheckbox;