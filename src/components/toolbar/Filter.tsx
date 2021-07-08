import React, { useState } from 'react';

const Filter = ({ onChange }: { onChange: (val: string) => void }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value.trim();
    if (value !== newValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <label className="app__toolbar__filter">
      <span className="app__toolbar__filter-label">Filter</span>
      <input type="search" onChange={handleChange} value={value} className="app__toolbar__filter-input" />
    </label>
  );
};

export default Filter;
