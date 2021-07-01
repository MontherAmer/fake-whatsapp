import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Divider from '../../../../components/_divider';
import Input from '../../../../components/_input';
import Message from '../../../../components/_message';
import { SocketContext } from '../../../../context/SocketContext';
import { updateScreenView } from '../../../../store/actions';

const MessageArea = ({ show }) => {
  const dispatch = useDispatch();
  const { sm } = useSelector((state) => state.utilsState);

  const { markMsgAsRead } = useContext(SocketContext);

  const { current, messages } = useSelector((state) => state.contactsState);
  const { _id } = useSelector((state) => state.userState);

  useEffect(() => {
    let objDiv = document.getElementById('messages');
    objDiv.scrollTop = objDiv.scrollHeight;
    markMsgAsRead({ user: _id, to: current?._id });
  }, [messages]);

  const redirect = (data) => dispatch(updateScreenView(data));

  return (
    <div className={show ? 'd-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100' : 'd-none'} id="message-area">
      <div className="row d-flex flex-row align-items-center justify-content-between p-2 pr-3 m-0 w-100" id="navbar">
        {sm ? <i className="fas fa-arrow-left ml-2" onClick={() => redirect('CHAT_LIST')}></i> : null}
        <div className="d-flex w-100">
          {current?._id ? (
            <img
              src={current?.image || 'https://via.placeholder.com/400x400'}
              alt="Profile Photo"
              className="img-fluid rounded-circle mr-2"
              style={{ width: '50px' }}
            />
          ) : null}

          {sm ? null : (
            <div className="w-50">
              <div className="name">{current?.name}</div>
              <div className="small last-message">{current?.email}</div>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex flex-column" id="messages" style={{ minHeight: 'calc(100% - 137px)' }}>
        {/* <Divider /> */}
        {messages?.map((item, i, arr) => (
          <Message first={i === 0 || item.from !== arr[i - 1].from} message={item} key={i} />
        ))}
      </div>
      {current?._id ? <Input id={current?._id} /> : null}
    </div>
  );
};

export default MessageArea;
