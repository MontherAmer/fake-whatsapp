import React from 'react';

const index = () => {
  return (
    <div className="col-12 col-sm-5 col-md-4 d-flex flex-column" id="chat-list-area" style={{ position: 'relative' }}>
      <div className="d-flex flex-column w-100 h-100" id="profile-settings">
        <div className="row d-flex flex-row align-items-center p-2 m-0" style={{ background: '#009688', minHeight: '65px' }}>
          <i
            className="fas fa-arrow-left p-2 mx-3 my-1 text-white"
            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            onclick="hideProfileSettings()"
          />
          <div className="text-white font-weight-bold">Profile</div>
        </div>
        <div className="d-flex flex-column" style={{ overflowY: 'auto' }}>
          <img alt="Profile Photo" className="img-fluid rounded-circle my-5 justify-self-center mx-auto" id="profile-pic" />
          <input type="file" id="profile-pic-input" className="d-none" />
          <div className="bg-white px-3 py-2">
            <div className="text-muted mb-2">
              <label htmlFor="input-name">Your Name</label>
            </div>
            <input type="text" name="name" id="input-name" className="w-100 border-0 py-2 profile-input" />
          </div>
          <div className="text-muted p-3 small">This is not your username or pin. This name will be visible to your WhatsApp contacts.</div>
          <div className="bg-white px-3 py-2">
            <div className="text-muted mb-2">
              <label htmlFor="input-about">About</label>
            </div>
            <input type="text" name="name" id="input-about" defaultValue className="w-100 border-0 py-2 profile-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
