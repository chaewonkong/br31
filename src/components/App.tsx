import React from 'react';
import { GlobalStyle } from "../global-styles";
import Main from "./Main"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
