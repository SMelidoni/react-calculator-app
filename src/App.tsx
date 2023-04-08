import './App.scss';

import React, { FC } from 'react';
import CalculatorHome from './pages/calculator-home/calculator-home.component';

const App: FC = () => {
  return (
    <div className="global-page-container">
      <CalculatorHome />
    </div>
  );
};

export default App;
