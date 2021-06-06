import React from 'react';

import MessageArea from '../MessageArea';
import ChatList from '../ChatList';
const index = () => {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100" style={{ overflow: 'hidden' }}>
        <ChatList />
        <MessageArea />
      </div>
    </div>
  );
};

export default index;
