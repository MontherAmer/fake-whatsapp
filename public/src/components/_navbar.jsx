import React, { useContext } from 'react';
import { ScreenContext } from '../context/ScreenContext';

const Nav = () => {
  const { CHAT_LIST, NEW_CONTACT, PROFILE, MESSAGES, updateScreen } = useContext(ScreenContext);

  return (
    <div className="row d-flex flex-row align-items-center justify-content-between p-2 pr-3" id="navbar">
      {CHAT_LIST ? (
        <img
          src={'https://via.placeholder.com/400x400'}
          onClick={() => updateScreen('PROFILE')}
          alt="Profile Photo"
          className="img-fluid rounded-circle mr-2"
        />
      ) : null}
      {!CHAT_LIST ? <i className="fas fa-arrow-left" onClick={() => updateScreen('CHAT_LIST')}></i> : null}

      {!NEW_CONTACT ? <i className="far fa-comments" onClick={() => updateScreen('NEW_CONTACT')}></i> : null}
    </div>
  );
};
// PROFILE  ,  NEW_CONNECTION,  CHAT_LIST
export default Nav;

{
  /* <i class="far fa-comments"></i> */
}

{
  /* <i class="fas fa-comment-dots"></i> */
}
{
  /* <i class="fas fa-arrow-left"></i> */
}
