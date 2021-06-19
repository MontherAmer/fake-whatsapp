import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SocketContext from '../../context/SocketContext';

import MessageArea from './components/Messages';
import ChatList from './components/Chatlist';
import Profile from './components/Profile';
import Group from './components/Group';

const Home = () => {
  const history = useHistory();

  const { _id } = useSelector((state) => state.userState);
  const { sm, screen } = useSelector((state) => state.utilsState);

  if (!_id) history.push('/auth');

  return (
    <div className="container-fluid" id="main-container">
      <SocketContext>
        <div className="row h-100 overflow-hidden">
          <Group show={screen === 'GROUP'} />
          <ChatList show={sm ? screen === 'CHAT_LIST' : screen === 'CHAT_LIST' || screen === 'MESSAGES'} />
          <Profile show={screen === 'PROFILE'} />
          <MessageArea show={sm ? screen === 'MESSAGES' : true} />
        </div>
      </SocketContext>
    </div>
  );
};

export default Home;
