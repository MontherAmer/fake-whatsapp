import React from 'react';

const Search = ({ handleChange }) => {
  return (
    <div className="w-100">
      <input
        type="text"
        name="groupName"
        placeholder="Enter group name"
        autoComplete="off"
        onChange={handleChange}
        className="w-100 border-0 py-2"
      />
    </div>
  );
};

export default Search;
