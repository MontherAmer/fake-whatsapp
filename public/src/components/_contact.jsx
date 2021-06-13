import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateScreenView } from '../store/_actions';

const Contact = ({ unreadMessages, lastMessage, item }) => {
  console.log('item  ', item);
  const dispatch = useDispatch();

  // const { sm, screen } = useSelector((state) => state.screenState);

  const handleClick = () => dispatch(updateScreenView('MESSAGES'));

  return (
    <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact" onClick={handleClick}>
      <img
        src={item.image || 'https://via.placeholder.com/400x400'}
        alt="Profile Photo"
        className="img-fluid rounded-circle mr-2"
        style={{ width: '50px' }}
      />
      <div className="w-50">
        <div className="name">{item.name}</div>
        <div className="small last-message">{item.lastMessage || 'Start chating'}</div>
      </div>
      <div className="flex-grow-1 text-right">
        {lastMessage ? <div className="small time">{item.lastMessageDate}</div> : null}

        {unreadMessages ? (
          <div className="badge badge-success badge-pill small" id="unread-count">
            {item.unread}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
