import React from 'react';

import Search from './_search';
import Nav from '../../../../components/_navbar';
const Group = () => {
  return (
    <div className="h-100">
      <Nav />
      <div className="row h-100 d-flex flex-column align-items-start p-2" id="group-container">
        <div className="px-3 py-3 w-100" id="group">
          <div className="mb-1">
            <label>Create group:</label>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Group;
