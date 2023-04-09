import { setFilter } from 'redux/filterSlice';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <label htmlFor="">
      <p className={s.titleFind}>Find contacts by name</p>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        className={s.inputFind}
      />
    </label>
  );
};

export default Filter;
