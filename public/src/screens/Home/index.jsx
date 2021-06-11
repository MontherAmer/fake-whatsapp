import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MessageArea from './components/Messagearea';
import ChatList from './components/Chatlist/index.jsx';
import Profile from './components/Profile';
import Group from './components/Group';

const Home = () => {
  const history = useHistory();

  const { _id } = useSelector((state) => state.userState);
  const { sm, screen } = useSelector((state) => state.screenState);


  if (!_id) history.push('/auth');

  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100 overflow-hidden" >
        {/* <div
          className={GROUP ? 'col-12 col-sm-5 col-md-4 d-flex flex-column' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        > */}
        <Group show={screen === 'GROUP'} />
        {/* </div> */}
        {/* <div
          className={CHAT_LIST ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        > */}
        <ChatList show={sm ? screen === 'CHAT_LIST' : screen === 'CHAT_LIST' || screen === 'MESSAGES'} />
        {/* </div> */}
        {/* <div
          className={PROFILE ? 'col-12 col-sm-5 col-md-4 d-flex flex-column ' : 'd-none'}
          style={{ height: '100%', backgroundColor: '#ededed' }}
        > */}
        <Profile show={screen === 'PROFILE'} />
        {/* </div> */}
        <MessageArea show={sm ? screen === 'MESSAGES' : true} />
      </div>
    </div>
  );
};

export default Home;
