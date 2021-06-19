import React from 'react';

const More = ({ darkMode, updateMode, signOut }) => {
  return (
    <>
      <div className="text-muted p-3 small">This is not your username or pin. This name will be visible to your WhatsApp contacts.</div>
      <div className="px-3 py-2 w-100 d-flex mode" onClick={updateMode}>
        <p>
          <i className="fas fa-adjust"></i> {darkMode ? 'Light mode' : 'Dark mode'}
        </p>
      </div>
      <div className="px-3 py-2 w-100 d-flex mode" onClick={signOut}>
        <p>
          <i className="fas fa-sign-out-alt"></i> Sign out
        </p>
      </div>
    </>
  );
};

export default More;
