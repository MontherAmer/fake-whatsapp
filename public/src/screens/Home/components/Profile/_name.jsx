import React from 'react';

const Name = () => {
  const handleNameChange = (e) => console.log(e);

  const updateName = () => console.log('blur');
  return (
    <div className="px-3 py-3 w-100 name">
      <div className="text-muted mb-2">
        <label htmlFor="input-name">Your Name</label>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        autoComplete="off"
        id="input-name"
        className="w-100 border-0 py-2 profile-input"
        onChange={handleNameChange}
        onBlur={updateName}
      />
    </div>
  );
};

export default Name;
