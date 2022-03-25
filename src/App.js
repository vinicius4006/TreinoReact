import P from 'prop-types';
import immer from 'immer';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

// action.js
let reducerActions = {
  CHANGE_TITLE: (state, action) => {
    const { title } = state;
    console.log('Chamou muda com', action.payload);
    return { title: title };
  },
  INVERT_TITLE: (state, action) => {
    const { title } = state;
    console.log(action.payload);
    return { title: title.split('').reverse().join('') };
  },
};

//data.js
export const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js

export const reducer = (state, action) => {
  let fn = reducerActions[action.type];
  if (fn) {
    return immer(state, (draftState) => fn(draftState, action));
  }
  return state;
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: reducerActions. });
  };
  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type={'text'} ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;

// let reducerActions = {
//   muda: (state, action) => {
//     const { title } = state;
//     console.log('Chamou muda com', action.payload);
//     return { title: title };
//   },
//   inverter: (state, action) => {
//     const { title } = state;
//     console.log(action.payload);
//     return { title: title.split('').reverse().join('') };
//   },
// };

// const reducer = (state, action) => {
//   let fn = reducerActions[action.type];
//   if (fn) {
//     return immer(state, (draftState) => fn(draftState, action));
//   }

//   console.log('[WARNING] ACTION without reducer:', action);

//   return state;
// };

// const [state, dispatch] = useReducer(reducer, globalState);
//   const { counter, title } = state;
