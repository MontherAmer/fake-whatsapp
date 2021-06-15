import React, { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { actionTypes } from '../store/_actions.types';
import { newMessageRecived } from '../store/_actions';

import * as io from 'socket.io-client';

export const SocketContext = createContext();

export default (props) => {
  const dispatch = useDispatch();

  const { _id, token } = useSelector((state) => state.userState);

  //   const { activeChat } = useSelector((state) => state.messagesState);
  console.log('TTTTTT ', token);
  const socket = io.connect('http://localhost:5000', {
    query: { token, senderId: _id },
  });

  socket.on('connect', () => {
    console.log('CONNECTED');
  });

  socket.on('MESSAGE_CREATED', (data) => dispatch(newMessageRecived(data)));

  //   socket.on('USER_TOGGLE_ON_OFF_LINE', (data) => {
  //     dispatch({ type: userActionTypes.UPDATE_ONLINE_OFFLINE_CONTACT, payload: data });
  //   });

  //   socket.on('SOCKET_NEW_MESSAGE_CREATED', ({ list, contactId, message }) => {
  //     dispatch({
  //       type: userActionTypes.USER_CONNECTIONS_LIST,
  //       payload: list
  //     });
  //     if (contactId === activeChat._id)
  //       dispatch({
  //         type: messagesActionTypes.NEW_MESSAGE,
  //         payload: message
  //       });
  //   });

  //   socket.on('SOCKET_I_AM_TYPING', ({ contactId, from }) => {
  //     if (activeChat._id === contactId)
  //       dispatch({
  //         type: messagesActionTypes.SHOW_TYPING_ON_MESSAGES_AREA,
  //         payload: { contactId, from }
  //       });
  //     dispatch({ type: messagesActionTypes.SHOW_TYPING_ON_CONTACT_LIST, payload: { contactId } });
  //   });

  //   socket.on('SOCKET_I_AM_STOP_TYPING', ({ contactId, from }) => {
  //     if (activeChat._id === contactId)
  //       dispatch({
  //         type: messagesActionTypes.HIDE_TYPING_ON_MESSAGES_AREA,
  //         payload: { contactId, from }
  //       });
  //     dispatch({ type: messagesActionTypes.HIDE_TYPING_ON_CONTACT_LIST, payload: { contactId } });
  //   });

  //   socket.on('SOCKET_MARK_MASSEGAES_AS_READ', data => {
  //     dispatch({
  //       type: userActionTypes.USER_CONNECTIONS_LIST,
  //       payload: data
  //     });
  //   });

  const sendSocket = (eventName, data) => socket.emit(eventName, data);

  return <SocketContext.Provider value={{ socket, sendSocket }}>{props.children}</SocketContext.Provider>;
};
