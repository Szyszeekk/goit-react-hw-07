import { useDispatch, useSelector } from "react-redux";
import storeConfig from "../redux/store";
import css from "../css/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearchChange = (event) => {
    dispatch(storeConfig.actions.setFilter(event.target.value));
  };

  return (
    <label>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleSearchChange}
        className={css.input}
      />
    </label>
  );
};

export default SearchBox;
