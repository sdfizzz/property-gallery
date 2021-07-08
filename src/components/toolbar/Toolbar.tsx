import React from 'react';
import Filter from './Filter';

const Toolbar = () => {
  const onFilterChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className="app__toolbar">
      <Filter onChange={onFilterChange} />
    </div>
  );
};

export default Toolbar;
