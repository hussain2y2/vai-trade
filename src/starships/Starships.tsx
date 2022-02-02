import React from 'react';
// Hero Icons
import {PlusIcon} from '@heroicons/react/solid';
// Redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addFleet} from './starshipSlice';

const Starships = () => {
  const {fleets, starships} = useSelector((state: RootState) => state.starship);
  const dispatch = useDispatch();

  // Add starship to fleet list
  const addFleetHandler = (fleet: any) => {
    if (!fleets.find((f: any) => f.name === fleet.name)) {
      dispatch(addFleet(fleet))
    }
  }

  return (
    starships && <div className="border-gray-200 mt-5 w-8/12">
      <div className="bg-gray-200 rounded-xl mb-4">
        {starships.map((starship: any) => <div
          className="flex justify-between pl-3 pr-4 py-4 rounded-xl hover:bg-gray-100" key={starship.url}>
          <div className="text-sm font-medium text-white w-9/12 bg-gray-400 rounded-lg p-2">{starship.name}</div>
          <button
            className="mt-1 font-bold text-white w-9 bg-teal-400 rounded-lg p-2"
            onClick={() => addFleetHandler(starship)}
          >
            <PlusIcon className="w-5 h-5"/>
          </button>
        </div>)}
      </div>
    </div>
  );
}

export default Starships;