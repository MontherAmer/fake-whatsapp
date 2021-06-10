import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { isEmail } from '../../../../utils/is.email';
import { addFriend, showAlert, showLoader, hideLoader } from '../../../../store/_actions';

import New from './_new';
import Nav from '../../../../components/_navbar';
import Contact from '../../../../components/_contact';

const arr = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
const ChatList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleaddFriend = async () => {
    if (isEmail(state.email)) {
      dispatch(showLoader());
      let { success } = await dispatch(addFriend(state));
      dispatch(hideLoader());
      setState({ ...state, email: '' });
      console.log('should redirect if success');
    } else {
      dispatch(showAlert('Please provide valid email'));
    }
  };

  return (
    <div className="overflow-auto h-100">
      <Nav />
      <div className="row h-100" id="chat-list">
        <New email={state.email} handleChange={handleChange} handleaddFriend={handleaddFriend} />
        {arr.map((item) => (
          <Contact lastMessage unreadMessages />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
