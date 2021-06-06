import React from 'react';

import MessageArea from '../MessageArea';
import ChatList from '../ChatList';
import Profile from '../Profile';
import Newconnection from '../Newconnection';

const index = () => {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100" style={{ overflow: 'hidden' }}>
        <Newconnection />
        <MessageArea />
      </div>
    </div>
  );
};

export default index;
