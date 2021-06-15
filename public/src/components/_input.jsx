import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { SocketContext } from '../context/SocketContext';

import Emoji from './_emoji';

const Input = ({ id }) => {
  const { sendSocket } = useContext(SocketContext);

  const [state, setState] = useState({});

  const handleChange = (e) => setState({ ...state, message: e.target.value, show: false });

  const handleEmoji = (e) => setState({ ...state, message: state.message.concat(e) });

  const toggleEmoji = () => setState({ ...state, show: !state.show });

  const submit = () => sendSocket('SEND_MESSAGE', { text: state.message, to: id, uuid: uuid() });

  return (
    <div className="justify-self-end align-items-center flex-row d-flex position-relative" id="input-area">
      <i className="far fa-smile text-muted px-3" style={{ cursor: 'pointer' }} onClick={toggleEmoji} />
      <input
        type="text"
        value={state.message}
        id="input"
        placeholder="Type a message"
        onChange={handleChange}
        className="flex-grow-1 border-0 px-3 py-2 my-3 shadow-sm"
      />
      <i className="fas fa-paper-plane text-muted px-3" style={{ cursor: 'pointer' }} onClick={submit} />
      <Emoji handleChoose={handleEmoji} show={state.show} />
    </div>
  );
};

export default Input;
