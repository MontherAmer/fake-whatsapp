import React from 'react';

const index = ({ unreadMessages, lastMessage }) => {
  return (
    <div className="chat-list-item d-flex flex-row w-100 p-2 border-bottom unread" id="contact">
      <img src="https://via.placeholder.com/400x400" alt="Profile Photo" className="img-fluid rounded-circle mr-2" />
      <div className="w-50">
        <div className="name">Programmers</div>
        {lastMessage ? <div className="small last-message">+91 98232 37261: yeah, i'm online</div> : null}
      </div>
      <div className="flex-grow-1 text-right">
        {lastMessage ? <div className="small time">28/03/2018</div> : null}

        {unreadMessages ? (
          <div className="badge badge-success badge-pill small" id="unread-count">
            2
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default index;
