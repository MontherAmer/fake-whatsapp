import React from 'react';

import Nav from '../../components/_navbar';
import Divider from '../../components/_divider';
import Input from '../../components/_input';
import Message from '../../components/_message';

const arr = [
  { _id: 1 },
  { _id: 1 },
  { _id: 2 },
  { _id: 2 },
  { _id: 1 },
  { _id: 2 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
  { _id: 1 },
];
const MessageArea = () => {
  return (
    <div className="d-none d-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100" id="message-area">
      {/* <div className="w-100 h-100 overlay d-none"></div> */}
      {/* Navbar */}
      <Nav left />

      {/* Messages */}
      <div className="d-flex flex-column" id="messages">
        <Divider />
        {arr.map((item, i) => (
          <Message first={true} from={i % 2 === 0} />
        ))}
      </div>
      {/* Input */}
      <Input />
    </div>
  );
};

export default MessageArea;
