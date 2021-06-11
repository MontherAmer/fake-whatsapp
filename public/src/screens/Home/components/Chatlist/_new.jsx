import React from 'react';

const New = ({ email, handleChange, handleaddFriend }) => {
  return (
    <div className="w-100 py-3 px-2" id="friend-email">
      <input
        type="email"
        name="email"
        placeholder="Add new contact"
        value={email}
        onChange={handleChange}
        className="w-100 border-0 py-1 px-2"
      />
      <i class="fas fa-plus-circle align-self-end ml-2" onClick={handleaddFriend}></i>
    </div>
  );
};

export default New;
