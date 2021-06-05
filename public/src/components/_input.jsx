import React from 'react';

const index = () => {
  return (
    <div className="justify-self-end align-items-center flex-row d-flex" id="input-area">
      <i className="far fa-smile text-muted px-3" />
      <input
        type="text"
        name="message"
        id="input"
        placeholder="Type a message"
        autoComplete="off"
        className="flex-grow-1 border-0 px-3 py-2 my-3  shadow-sm"
      />
      <i className="fas fa-paper-plane text-muted px-3" style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default index;
