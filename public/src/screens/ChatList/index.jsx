import React from 'react';
import Nav from '../../components/_navbar';
import Contact from '../../components/_contact';

const arr = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
const index = () => {
  return (
    <div className="overflow-auto" id="left-area">
      <Nav />
      <div className="row h-100" id="chat-list">
        {arr.map((item) => (
          <Contact lastMessage unreadMessages />
        ))}
      </div>
    </div>
  );
};

export default index;
