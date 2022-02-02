import React from 'react';
import {classNames} from '../utils';

interface ProgressBarProps {
  capacity: any,
  crew: any,
  passengers: any
}

const ProgressBar = ({capacity, crew, passengers}: ProgressBarProps) => {
  const usage = Math.ceil((parseFloat(crew + passengers)) * 100 / parseFloat(capacity));
  return (
    <div className='bg-gray-300 rounded-lg w-64 h-6 dark:bg-gray-700'>
      <div
        className={
          classNames(
            'h-6 rounded-lg',
            usage >= 70 ? 'bg-red-300' : '',
            usage >= 35 && usage < 70 ? 'bg-orange-300' : '',
            usage < 35 ? 'bg-teal-400' : ''
          )}
        style={{width: `${usage}%`}}/>
    </div>
  );
};

export default ProgressBar;