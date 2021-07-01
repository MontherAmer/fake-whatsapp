import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';

import { SocketContext } from '../context/SocketContext';

import Emoji from './_emoji';

const Input = ({ id }) => {
  const [state, setState] = useState({ message: '' });

  const { submitMsg } = useContext(SocketContext);

  const { _id } = useSelector((state) => state.userState);

  const handleChange = (e) => setState({ ...state, message: e.target.value, show: false });

  const handleEmoji = (e) => setState({ ...state, message: state.message.concat(e) });

  const toggleEmoji = () => setState({ ...state, show: !state.show });

  const submit = () => (submitMsg({ text: state.message, to: id }), setState({ ...state, message: '', show: false }));

  return (
    <div className="justify-self-end align-items-center flex-row d-flex position-relative" id="input-area">
      <i className="far fa-smile text-muted px-3" style={{ cursor: 'pointer' }} onClick={toggleEmoji} />
      <input
        type="text"
        autoComplete="off"
        value={state.message || ''}
        id="input"
        placeholder="Type a message"
        onChange={handleChange}
        className="flex-grow-1 border-0 px-3 py-2 my-3 shadow-sm"
      />
      <i className="fas fa-paper-plane text-muted px-3" style={{ cursor: 'pointer' }} onClick={state.message.length ? submit : null} />
      <Emoji handleChoose={handleEmoji} show={state.show} />
    </div>
  );
};

export default Input;
