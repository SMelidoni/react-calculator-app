import './calculator-home.styles.scss';

import React, { FC } from 'react';

import MainButton from '../../components/main-button/main-button.component';

interface CalculatorHomeProps {
  showBackButton?: boolean;
}

const CalculatorHome: FC<CalculatorHomeProps> = ({ showBackButton }) => {
  return (
    <div className="calculator-home-container">
      {showBackButton && (
        <div className="calculator-home-back-button">
          <MainButton label="<- Back" />
        </div>
      )}
      <header className="calculator-home-header">
        <h1 className="header-text header-text-react">React</h1>
        <h2 className="header-text header-text-calculator">Calculator</h2>
      </header>
      <div className="calculator-home-content">
        {/* calculator component will go here */}
      </div>
    </div>
  );
};

export default CalculatorHome;
