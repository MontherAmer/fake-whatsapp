import React from 'react';
import { useSelector } from 'react-redux';
import Divider from '../../../components/_divider';
import Input from '../../../components/_input';
import Message from '../../../components/_message';

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
const MessageArea = ({ show }) => {
  const { sm } = useSelector((state) => state.screenState);
  return (
    <div className={show ? "d-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100" : "d-none"} id="message-area">
      <div className="row d-flex flex-row align-items-center justify-content-between p-2 pr-3 m-0 w-100" id="navbar">
        {sm ? <i className="fas fa-arrow-left ml-2" onClick={() => console.log('CHAT_LIST')}></i> : null}
        <div className="d-flex ">
          <img src={'https://via.placeholder.com/400x400'} alt="Profile Photo" className="img-fluid rounded-circle mr-2" />
          {sm ? null : (
            <div className="w-50">
              <div className="name">Name</div>
              <div className="small last-message">asdfsd@email.com</div>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex flex-column" id="messages">
        <Divider />
        {arr.map((item, i) => (
          <Message first={true} from={i % 2 === 0} />
        ))}
      </div>
      <Input />
    </div>
  );
};

export default MessageArea;
