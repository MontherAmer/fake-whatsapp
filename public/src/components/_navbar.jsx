import React from 'react';

const index = ({ left }) => {
  return (
    <div className={left ? 'row d-flex flex-row align-items-center p-2 m-0 w-100' : 'row d-flex flex-row align-items-center p-2'} id="navbar">
      <img src={'https://via.placeholder.com/400x400'} alt="Profile Photo" className="img-fluid rounded-circle mr-2" />
    </div>
  );
};

export default index;
