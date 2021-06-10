import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { isEmail } from '../../../../utils/is.email';
import { addFriend, showAlert, showLoader, hideLoader } from '../../../../store/_actions';

import Nav from '../../../../components/_navbar';

let data = [
  { name: 'user1', email: 'user1@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'user2', email: 'user3@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'user3', email: 'user4@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'bbb', email: 'bbb@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'bbc', email: 'bbc@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'aaa', email: 'aaa@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'ccc', email: 'ccc@test.com', image: 'https://via.placeholder.com/400x400' },
  { name: 'cca', email: 'cca@test.com', image: 'https://via.placeholder.com/400x400' },
];

const Newconnection = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    let result = data.filter((item) => item.name.includes(e.target.value) || item.email.includes(e.target.value));
    let show = e.target.value ? true : false;
    setState({ ...state, search: e.target.value, show, result });
  };

  const handleaddFriend = async () => {
    if (isEmail(state.email)) {
      dispatch(showLoader());
      let { success } = await dispatch(addFriend(state));
      dispatch(hideLoader());
      console.log('should redirect if success');
    } else {
      dispatch(showAlert('Please provide valid email'));
    }
  };

  return (
    <div className="h-100">
      <Nav />
      <div className="row h-100 d-flex flex-column align-items-start" id="new-connection">
        {/* add one connection */}
        <div className="px-3 py-3 w-100" id="friend-email">
          <div className="mb-1">
            <label>New friend:</label>
          </div>
          <div className="d-flex">
            <input type="email" name="email" placeholder="Email.." value={state.email} onChange={handleChange} className="w-100 border-0 py-2" />
            <i class="far fa-caret-square-right align-self-end ml-2" onClick={handleaddFriend}></i>
          </div>
        </div>
        {/* create group */}
        <div className="px-3 py-3 w-100" id="group">
          <div className="mb-1">
            <label>Create group:</label>
          </div>
          <div className="d-flex">
            <input
              type="text"
              name="groupName"
              placeholder="Enter group name"
              autoComplete="off"
              onChange={handleChange}
              className="w-100 border-0 py-2"
            />
          </div>
          <div>
            <input
              type="text"
              autoComplete="off"
              name="search"
              value={state.search}
              placeholder="Start typing to select friend.."
              onChange={handleSearch}
              className="w-100 border-0 py-2"
            />
            {state.show ? (
              <div className="group-menu">
                {state.result.map((item) => (
                  <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact">
                    <img src={item.image} alt="Profile Photo" className="img-fluid rounded-circle mr-2" />
                    <div className="w-50">
                      <div className="name">{item.name}</div>
                      <div className="small last-message">{item.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {state.show ? null : (
            <div className="d-flex justify-content-end my-2">
              <i class="far fa-caret-square-right"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newconnection;
