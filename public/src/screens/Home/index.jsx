import React, { useContext } from 'react';

import { ScreenContext } from '../../context/ScreenContext';

import MessageArea from '../MessageArea';
import ChatList from '../ChatList';
import Profile from '../Profile';
import Newconnection from '../Newconnection';

const Home = () => {
  const { CHAT_LIST, NEW_CONTACT, PROFILE, MESSAGES, smallScreen } = useContext(ScreenContext);

  console.log('MESSAGESMESSAGES ', MESSAGES);
  console.log('CHAT_LISTCHAT_LIST ', CHAT_LIST);
  console.log('smallScreensmallScreen ', smallScreen);
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100" style={{ overflow: 'hidden' }}>
        <div className={NEW_CONTACT ? 'col-12 col-sm-5 col-md-4 d-flex flex-column' : 'd-none'} style={{ height: '100%' }}>
          <Newconnection />
        </div>
        <div className={CHAT_LIST ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'} style={{ height: '100%' }}>
          <ChatList />
        </div>
        <div className={PROFILE ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'} style={{ height: '100%' }}>
          <Profile />
        </div>
        {MESSAGES ? <MessageArea /> : null}
      </div>
    </div>
  );
};

export default Home;
