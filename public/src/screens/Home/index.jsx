import React from 'react';

import MessageArea from '../MessageArea';
import ChatList from '../ChatList';
import Profile from '../Profile';

const index = () => {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100" style={{ overflow: 'hidden' }}>
        <Profile />
        <MessageArea />
      </div>
    </div>
  );
};

export default index;
