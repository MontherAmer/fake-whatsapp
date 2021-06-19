import React, { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { actionTypes } from '../store/_actions.types';

import { emptyUnreadMsgs } from '../store/actions';

import * as io from 'socket.io-client';

export const SocketContext = createContext();

export default (props) => {
  const dispatch = useDispatch();

  const { _id, token } = useSelector((state) => state.userState);
  const { current } = useSelector((state) => state.contactsState);

  const socket = io.connect('http://localhost:5000', {
    query: { token, senderId: _id },
  });

  socket.on('SOCKET_REPLAY_ON_CREATE_MESSAGE', (data) => {
    if (_id === data.from) dispatch({ type: actionTypes.ACTION_UPDATE_MESSAGE_IF_SENDER, payload: data });
    if (current._id === data.to && data.from !== _id) dispatch({ type: actionTypes.ACTION_UPDATE_MESSAGE_IF_RECIVER, payload: data });
    if (current._id !== data.to && data.from !== _id) dispatch({ type: actionTypes.ACTION_INCREASE_UNREAD_MESSAGES, payload: data.to });
    dispatch({ type: actionTypes.ACTION_UPDATE_LAST_MESSAGE_IN_LIST, payload: data });
  });

  const sendSocket = (eventName, data) => socket.emit(eventName, data);

  const submitMsg = (data) => {
    let uuid = uuidv4();
    dispatch({ type: actionTypes.ACTION_STORE_TEMP_MESSAGE, payload: { ...data, uuid } });
    socket.emit('SOCKET_CREATE_MESSAGE', { ...data, uuid });
  };

  const markMsgAsRead = (data) => {
    dispatch({ type: actionTypes.ACTION_CLEAR_UNREAD_MESSAGES, payload: data.to });
    socket.emit('SOCKET_MARK_MSG_AS_READ', data);
  };

  return <SocketContext.Provider value={{ socket, sendSocket, markMsgAsRead, submitMsg }}>{props.children}</SocketContext.Provider>;
};
