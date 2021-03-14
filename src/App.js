import React, { useState, useEffect } from 'react';
import EmptyTab from './Components/EmptyTab'
import DataDisplayPage from './Components/DataDisplayPage';
import './styles/styles.css';

const App = () => {

  const [buttonState, setButtonState] = useState('empty');  
  const [isActive, setIsActive] = useState('empty');

  const handleEmptyClick = (e) => {
    e.preventDefault();
    setButtonState('empty')
    setIsActive('empty')
  } 

  const handleDataClick = (e) => {
    e.preventDefault();
    setButtonState('data')
    setIsActive('data')
  }

  return (
    <div className='appContainer'>
      <div className='seperator'>
        <div className='buttonContainer'>
          <button 
            className={isActive === 'empty' ? 'mainIsActive' : 'mainButton'} 
            onClick={handleEmptyClick}
          >
            Empty Tab
          </button>

          <button 
            className={isActive === 'data' ? 'mainIsActive' : 'mainButton'} 
            onClick={handleDataClick}
          >
            Data
          </button>
        </div>
      </div>

      <div className='dataContaniner'>
        {
          buttonState === 'empty' ?
            <EmptyTab />
            :
            <DataDisplayPage />
        }
      </div>
    </div>
  );
}

export default App;