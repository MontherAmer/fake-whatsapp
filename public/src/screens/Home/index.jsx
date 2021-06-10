import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ScreenContext } from '../../context/ScreenContext';

import MessageArea from './components/Messagearea';
import ChatList from './components/Chatlist/index.jsx';
import Profile from './components/Profile';
import Newconnection from './components/Group';

const Home = () => {
  const history = useHistory();

  const { _id } = useSelector((state) => state.userState);

  const { CHAT_LIST, NEW_CONTACT, PROFILE, MESSAGES, smallScreen } = useContext(ScreenContext);

  if (!_id) history.push('/auth');

  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100" style={{ overflow: 'hidden' }}>
        <div
          className={NEW_CONTACT ? 'col-12 col-sm-5 col-md-4 d-flex flex-column' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        >
          <Newconnection />
        </div>
        <div
          className={CHAT_LIST ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        >
          <ChatList />
        </div>
        <div
          className={PROFILE ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        >
          <Profile />
        </div>
        {MESSAGES ? <MessageArea /> : null}
      </div>
    </div>
  );
};

export default Home;
