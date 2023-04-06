import './calculator-home.styles.scss';

import React, { FC } from 'react';

import MainButton from '../../components/main-button/main-button.component';

const CalculatorHome: FC = () => {
  return (
    <div className="calculator-home-container">
      <div className="calculator-home-back-button">
        <MainButton label="<- Back" />
      </div>
      <header className="calculator-home-header">
        <h1 className="header-text header-text-react">React</h1>
        <h2 className="header-text header-text-calculator">Calculator</h2>
      </header>
    </div>
  );
};

export default CalculatorHome;
