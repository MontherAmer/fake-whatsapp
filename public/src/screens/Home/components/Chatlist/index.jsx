import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isEmail } from '../../../../utils/is.email';
import { addFriend, showAlert, showLoader, hideLoader, updateContactList } from '../../../../store/actions';

import New from './_new';
import Nav from '../../../../components/_navbar';
import Contact from '../../../../components/_contact';

const ChatList = ({ show }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({});

  const { list } = useSelector((state) => state.contactsState);

  useEffect(() => {
    dispatch(updateContactList());
  }, []);

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleaddFriend = async () => {
    if (isEmail(state.email)) {
      dispatch(showLoader());
      let { success } = await dispatch(addFriend(state));
      dispatch(hideLoader());
      setState({ ...state, email: '' });
    } else {
      dispatch(showAlert('Please provide valid email'));
    }
  };

  return (
    <div className={show ? 'col-12 col-sm-5 col-md-4 d-flex flex-column h-100' : 'd-none'}>
      <Nav />
      <div className="row" id="left-area" style={{ height: 'calc(100% - 67px)' }}>
        <New email={state.email} handleChange={handleChange} handleaddFriend={handleaddFriend} />
        <div
          className="w-100 d-flex flex-column justify-content-start flex-nowrap overflow-auto"
          style={{ overflowY: 'auto', height: 'calc(100% - 64px)', overflowX: 'hidden' }}
        >
          {list?.map((item, i) => (
            <Contact item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
