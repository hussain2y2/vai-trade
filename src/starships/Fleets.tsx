import React from 'react';
import {PencilIcon, XCircleIcon} from '@heroicons/react/solid';
import {removeFleet, selectDetail} from './starshipSlice';
import ProgressBar from './ProgressBar';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

const Fleets = () => {
  const {fleets} = useSelector((state: RootState) => state.starship);
  const dispatch = useDispatch();

  // Remove fleet form list
  const removeFleetHandler = (url: string) => {
    dispatch(removeFleet({url}))
  }

  return(
    <div className="w-3/6 mr-5">
      <div className="py-4 px-3 mx-auto bg-white rounded-xl border border-gray-200 min-h-full">
        <h3 className="text-2xl font-bold mx-5">Your Fleet</h3>
        {fleets.map((fleet: any, key: number) => <div className="flex justify-start items-center mx-5 mt-5" key={key}>
          <button className="font-bold w-14 h-14 bg-gray-400 rounded-full p-4 mr-3" onClick={() => dispatch(selectDetail(fleet))}>
            <PencilIcon className="w-6 h-6 text-gray-900"/>
          </button>
          <div className="flex flex-col">
            <div className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-1">
              {fleet.name}
            </div>
            <div className="text-sm font-medium text-white bg-gray-300 w-64 rounded-lg px-2 py-0.5 mb-1">
              {fleet.manufacturer}
            </div>
            <ProgressBar capacity={fleet.cargo_capacity} crew={fleet.crew} passengers={fleet.passengers}/>
          </div>
          <button className="font-bold ml-3 text-red-400" onClick={() => removeFleetHandler(fleet.url)}>
            <XCircleIcon className="w-8 h-8"/>
          </button>
        </div>)}
      </div>
    </div>
  );
}

export default Fleets;