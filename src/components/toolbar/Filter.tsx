import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_CARDS } from '../../store/actionTypes';

const Filter = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value.trim();
      setValue(newValue);
      dispatch({ type: FILTER_CARDS, filter: newValue });
    },
    [dispatch],
  );

  return (
    <label className="app__toolbar__filter">
      <span className="app__toolbar__filter-label">Filter</span>
      <input type="search" onInput={handleChange} value={value} className="app__toolbar__filter-input" />
    </label>
  );
};

export default Filter;
