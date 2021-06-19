import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Message = ({ first, message }) => {
  let { createdAt, from, text } = message;
  const { _id } = useSelector((state) => state.userState);
  return (
    <div className={`${from === _id ? 'align-self-start' : 'align-self-end self'}  p-1 my-1 mx-3 rounded message-item`}>
      <div className={`msg d-flex ${from === _id ? 'justify-content-start' : 'justify-content-end'}`}>
        <div className={`bubble ${from === _id ? '' : 'alt'} ${first ? 'follow' : ''} `}>
          <div className={`txt`}>
            <span className={`message ${first ? 'follow' : ''}`}>{text}</span>
            <span className={`timestamp ${from === _id ? 'right' : 'left'}`}>{moment(createdAt).format('LT')}</span>
          </div>
          {first ? <div className={`bubble-arrow ${from === _id ? '' : 'alt'}`}></div> : null}
        </div>
      </div>
    </div>
  );
};

export default Message;
