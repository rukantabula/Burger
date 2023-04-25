import React from 'react';
import { Main } from './components/Main';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>

  );
}

export default App;
