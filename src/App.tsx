import './App.scss';

import React, { FC } from 'react';
import CalculatorHome from './pages/calculator-home/calculator-home.component';

interface AppProps {
  showBackButton?: boolean;
}

const App: FC<AppProps> = ({ showBackButton }) => {
  return (
    <div className="global-page-container">
      <CalculatorHome showBackButton={showBackButton} />
    </div>
  );
};

export default App;
