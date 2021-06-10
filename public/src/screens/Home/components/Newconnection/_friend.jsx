import React from 'react';

const Friend = ({ email, handleChange, handleaddFriend }) => {
  return (
    <div className="px-3 py-3 w-100" id="friend-email">
      <div className="mb-1">
        <label>New friend:</label>
      </div>
      <div className="d-flex">
        <input type="email" name="email" placeholder="Email.." value={email} onChange={handleChange} className="w-100 border-0 py-2" />
        <i class="far fa-caret-square-right align-self-end ml-2" onClick={handleaddFriend}></i>
      </div>
    </div>
  );
};

export default Friend;
