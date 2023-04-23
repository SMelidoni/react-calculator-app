import './App.scss';

import React, { FC } from 'react';
import CalculatorHome from './pages/calculator-home/calculator-home.component';

const App: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <CalculatorHome />
    </div>
  );
};

export default App;
