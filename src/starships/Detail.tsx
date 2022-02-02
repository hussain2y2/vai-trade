import React from 'react';
// Hero icons
import {MinusIcon, PlusIcon} from '@heroicons/react/solid';
// Redux & store
import {useDispatch, useSelector} from 'react-redux';
import {updateFleet} from './starshipSlice';
import {RootState} from '../store';
// Components
import ProgressBar from './ProgressBar';

const Detail = () => {
    const {
      detail: {
        cargo_capacity,
        crew,
        passengers,
        manufacturer,
        url
      }
    }: any = useSelector((state: RootState) => state.starship);
    const dispatch = useDispatch();
    const addPassenger = () => {
      const sum = (+passengers) + (+crew)
      if (sum < (+cargo_capacity)) {
        dispatch(updateFleet({passengers: (+passengers) + 1, url}));
      }
    }
    return (
      <div
        className="flex justify-start bg-white max-w-full py-4 px-3 mx-auto mx-5 my-5 border border-b-gray-200 rounded-lg">
        <div className="py-4 px-3">
          <h1 className="text-4xl font-bold">Detail View</h1>
          <div className="flex flex-col mt-5">
            <div className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-2">
              Crew: {crew}
            </div>
            <div className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-2">
              Passengers: {passengers}
            </div>
            <div className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-2">
              Maximum Capacity: {cargo_capacity}
            </div>
            <div className="text-sm font-medium text-white bg-gray-300 w-full rounded-lg px-2 py-0.5 mb-2">
              Manufacturer: {manufacturer}
            </div>
            <div className="flex justify-center items-center mt-10 bg-gray-100 rounded-lg p-4">
              <ProgressBar capacity={cargo_capacity} crew={crew} passengers={passengers}/>
              <button
                className="mt-1 font-bold text-white w-8 bg-teal-400 rounded-lg p-1 ml-6 mr-4"
                onClick={() => addPassenger()}
              >
                <PlusIcon className="w-6 h-6"/>
              </button>
              <button className="mt-1 font-bold text-white w-8 bg-red-300 rounded-lg p-1">
                <MinusIcon className="w-6 h-6"/>
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <button className="font-bold text-gray-600 bg-gray-300 rounded-lg px-7 py-2">Cancel</button>
            <button className="font-bold text-gray-600 bg-gray-300 rounded-lg px-7 py-2">Save</button>
          </div>
        </div>
      </div>
    );
  }
;

export default Detail;