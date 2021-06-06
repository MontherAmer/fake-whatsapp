import React from 'react';
import Nav from '../../components/_navbar';
import Contact from '../../components/_contact';

const arr = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
const index = () => {
  return (
    <div className="col-12 col-sm-5 col-md-4 d-flex flex-column" id="left-area">
      <Nav />
      <div className="row" id="chat-list">
        {arr.map((item) => (
          <Contact lastMessage unreadMessages />
        ))}
      </div>
    </div>
  );
};

export default index;
