import React, { useContext, useRef } from 'react';
import { ScreenContext } from '../../../../context/ScreenContext';

const More = () => {
  const { updateMode } = useContext(ScreenContext);
  return (
    <>
      <div className="text-muted p-3 small">This is not your username or pin. This name will be visible to your WhatsApp contacts.</div>
      <div className="px-3 py-2 w-100 d-flex mode" onClick={() => updateMode()}>
        <p>
          <i className="fas fa-adjust"></i> Light mode
        </p>
      </div>
      <div className="px-3 py-2 w-100 d-flex mode">
        <p>
          <i class="fas fa-sign-out-alt"></i> Sign out
        </p>
      </div>
    </>
  );
};

export default More;
