import { createContext, useState } from 'react';
import { globalState } from './data';

// eslint-disable-next-line
export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(globalState);

  return <GlobalContext.Provider value={{ contextState, setState }}>{children}</GlobalContext.Provider>;
};
