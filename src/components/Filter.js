import React from 'react';

const Filter = ({ setStatus }) => {
  const handleSelect = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className='filter'>
      <label htmlFor='filter-todos'>Filter</label>
      <select id='filter-todos' onChange={handleSelect}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
    </form>
  );
};

export default Filter;
