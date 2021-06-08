import React, { createContext, useEffect, useState } from 'react';
import useWindowSize from '../hooks/windowSize';

export const ScreenContext = createContext();

export default (props) => {
  const width = useWindowSize();

  const [state, setState] = useState({
    CHAT_LIST: true,
    NEW_CONTACT: false,
    PROFILE: false,
    MESSAGES: false,
    smallScreen: false,
    darkMode: false,
  });

  useEffect(() => {
    let smallScreen = width <= 425 ? true : false;
    setState({ ...state, smallScreen, MESSAGES: !smallScreen, CHAT_LIST: true });
  }, [width]);

  const updateScreen = (e) => {
    width <= 425
      ? setState({
          ...state,
          CHAT_LIST: e === 'CHAT_LIST' ? true : false,
          NEW_CONTACT: e === 'NEW_CONTACT' ? true : false,
          PROFILE: e === 'PROFILE' ? true : false,
          MESSAGES: e === 'MESSAGES' ? true : false,
        })
      : setState({
          ...state,
          CHAT_LIST: e === 'CHAT_LIST' || e === 'MESSAGES' ? true : false,
          NEW_CONTACT: e === 'NEW_CONTACT' ? true : false,
          PROFILE: e === 'PROFILE' ? true : false,
          MESSAGES: 'MESSAGES' ? true : false,
        });
  };

  const updateMode = () => setState({ ...state, darkMode: !state.darkMode });

  return (
    <ScreenContext.Provider value={{ ...state, updateMode: updateMode, updateScreen: updateScreen }}>{props.children}</ScreenContext.Provider>
  );
};
