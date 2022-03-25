import React, { useContext } from 'react';

export default function App2() {
  const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

  const ThemeContext = React.createContext();

  function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function Text() {
    const theme = useContext(ThemeContext);

    return (
      <div>
        <h1 style={{ background: theme.background, color: theme.foreground }}>TEXTO TESTADO</h1>
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        Eu sou estilizado pelo tema do contexto!
      </button>
    );
  }

  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
      <Text />
    </ThemeContext.Provider>
  );
}
