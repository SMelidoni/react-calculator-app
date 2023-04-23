import './calculator-home.styles.scss';

import React, { FC } from 'react';

import BasicCalculator from '../../components/basic-calculator/basic-calculator.component';

const CalculatorHome: FC = () => {
  return (
    <div className='calculator-home-container'>
      <header className='calculator-home-header'>
        <h1 className='header-text header-text-react'>React</h1>
        <h1 className='header-text header-text-calculator'>Calculator</h1>
      </header>
      <div className='calculator-home-content'>
        <BasicCalculator />
        {/* <AdvancedCalculator />*/}
      </div>
    </div>
  );
};

export default CalculatorHome;
