import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default (props) => {
  const [state, setState] = useState({});

  const updateMode = () => setState({ ...state, darkMode: !state.darkMode });

  return <ThemeContext.Provider value={{ ...state, updateMode: updateMode }}>{props.children}</ThemeContext.Provider>;
};
