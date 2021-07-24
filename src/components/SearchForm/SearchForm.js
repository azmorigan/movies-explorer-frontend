import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className="SearchForm">
      <div className="SearchForm__container">
        <div className="SearchForm__form">
          <input
            className="SearchForm__input"
            placeholder="Фильм" />
          <button type="submit" className="SearchForm__button" />
        </div>
        <FilterCheckbox className="FilterCheckbox_type_desktop" />
      </div>
      <FilterCheckbox className="FilterCheckbox_type_mobile" />
    </form>
  );
}

export default SearchForm;