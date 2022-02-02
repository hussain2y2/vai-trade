import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import ProgressBar from './ProgressBar';
import {selectDetail} from './starshipSlice';
import {MinusIcon, PlusIcon} from '@heroicons/react/solid';

const Detail = ()  => {
  const {detail}: any = useSelector((state: RootState) => state.starship);
  return(
    <div className="flex justify-start bg-white max-w-full py-4 px-3 mx-auto mx-5 border border-b-gray-200 rounded-lg">
      <div className="py-4 px-3">
        <h1 className="text-4xl font-bold">Detail View</h1>
        <div className="flex flex-col mt-5">
          <div className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-2">
            {detail.name}
          </div>
          <div className="text-sm font-medium text-white bg-gray-300 w-64 rounded-lg px-2 py-0.5 mb-2">
            {detail.manufacturer}
          </div>
          <div className="flex justify-center items-center mt-10 bg-gray-100 rounded-lg p-4" >
            <ProgressBar capacity={1000} crew={120} passengers={500}/>
            <button className="mt-1 font-bold text-white w-8 bg-teal-400 rounded-lg p-1 ml-6 mr-4">
              <PlusIcon className="w-6 h-6"/>
            </button>
            <button className="mt-1 font-bold text-white w-8 bg-red-300 rounded-lg p-1">
              <MinusIcon className="w-6 h-6"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;