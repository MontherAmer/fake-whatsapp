import React, { useRef } from 'react';

import Nav from '../../components/_navbar';
const Profile = () => {
  const hiddenFileInput = useRef(null);

  const handleImage = (e) => hiddenFileInput.current.click();

  const handleImageChange = (e) => console.log('UPDATED');

  const handleNameChange = (e) => console.log(e);

  const updateName = () => console.log('blur');

  return (
    <div className="col-12 col-sm-5 col-md-4 d-flex flex-column" id="left-area">
      <Nav />

      <div className="row h-100 " id="profile">
        <input type="file" id="profile-pic-input" className="d-none" onChange={handleImageChange} ref={hiddenFileInput} />
        <img
          alt="Profile Photo"
          src="https://via.placeholder.com/400x400"
          className="img-fluid rounded-circle my-5 justify-self-center mx-auto profile-pic"
          onClick={handleImage}
        />
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
        <div className="text-muted p-3 small">This is not your username or pin. This name will be visible to your WhatsApp contacts.</div>
        <div className="px-3 py-2 w-100 d-flex mode">
          <p>
            <i className="fas fa-adjust"></i> Light mode
          </p>
        </div>

        <div className="px-3 py-2 w-100 d-flex mb-5 mode">
          <p>
            <i class="fas fa-sign-out-alt"></i> Sign out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
