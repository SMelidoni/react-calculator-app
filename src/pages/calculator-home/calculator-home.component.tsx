import './calculator-home.styles.scss';

import React, { FC } from 'react';

import MainButton from '../../components/main-button/main-button.component';
import BasicCalculator from '../../components/basic-calculator/basic-calculator.component';

interface CalculatorHomeProps {
  showBackButton?: boolean;
}

const CalculatorHome: FC<CalculatorHomeProps> = ({ showBackButton }) => {
  return (
    <div className="calculator-home-container">
      {showBackButton && (
        <div className="calculator-home-back-button">
          <MainButton label="<- Back" route="/" />
        </div>
      )}
      <header className="calculator-home-header">
        <h1 className="header-text header-text-react">React</h1>
        <h1 className="header-text header-text-calculator">Calculator</h1>
      </header>
      <div className="calculator-home-content">
        <BasicCalculator />
        {/* <AdvancedCalculator />*/}
      </div>
    </div>
  );
};

export default CalculatorHome;
