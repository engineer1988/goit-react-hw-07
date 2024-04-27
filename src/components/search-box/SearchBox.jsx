import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.search_box_field}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleChange}
        className={css.search_box_field}
      />
    </div>
  );
};

export default SearchBox;
