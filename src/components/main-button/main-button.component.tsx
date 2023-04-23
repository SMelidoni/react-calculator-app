import './main-button.styles.scss';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface MainButtonProps {
  label: string;
  route?: string;
}

const MainButton: FC<MainButtonProps> = ({ label, route }) => {
  const retroBackLabel = (
    <>
      <span className='main-button-arrow'>←</span>
      <span className='main-button-text'>Back</span>
    </>
  );

  return (
    <div className='main-button-container'>
      {route ? (
        <Link to={route} className='main-button'>
          {label === '<- Back' ? retroBackLabel : label}
        </Link>
      ) : (
        <div className='main-button'>
          {label === '<- Back' ? retroBackLabel : label}
        </div>
      )}
    </div>
  );
};

export default MainButton;
