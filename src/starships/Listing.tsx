import React, {useState} from 'react';
// Hero Icons
import {PencilIcon, PlusIcon} from '@heroicons/react/solid';
import {useDispatch, useSelector} from 'react-redux';
// starship reducer actions
import {addFleet, selectDetail} from './starshipSlice';
// Custom utils
import {Api, useDebouncedEffect} from '../utils';
import {RootState} from '../store';
import ProgressBar from './ProgressBar';

const Listing = () => {
  const [searchText, setSearchText] = useState('');
  const [starships, setStarships] = useState([]);

  let url = '/api/starships';

  // Debounced effect
  useDebouncedEffect(() => Api.get(searchText ? `${url}/?search=${searchText}` : url)
      .then(response => {
        const {results}: any = response.data;
        setStarships(results);
      })
      .catch(error => {
        console.log(error);
      }),
    [searchText],
    1000
  );
  const {fleets} = useSelector((state: RootState) => state.starship);
  const dispatch = useDispatch();
  const addFleetHandler = (fleet: any) => {
    if (!fleets.find((f: any) => f.name === fleet.name)) {
      dispatch(addFleet(fleet))
    }
  }
  return (
    <div className="flex justify-center m-5">
      <div className="w-4/6 ml-5">
        <h1 className="text-4xl font-bold">Star Fleet Manager</h1>
        <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </span>
          <input
            type="search"
            className="py-3 w-8/12 text-sm text-gray-600 bg-white border-1 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-600"
            placeholder="Search..." autoComplete="off"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {/* List Searched Starships */}
        {starships && <div className="border-gray-200 mt-5 w-8/12">
          <div className="bg-gray-100 rounded-xl mb-4">
            {starships.map((starship: any, key) => <div
              className="flex justify-between pl-3 pr-4 py-4 rounded-xl hover:bg-white" key={key}>
              <div className="text-sm font-medium text-white w-9/12 bg-gray-400 rounded-lg p-2">{starship.name}</div>
              <button
                className="mt-1 font-bold text-white w-9 bg-teal-400 rounded-lg p-2"
                onClick={() => addFleetHandler(starship)}
              >
                <PlusIcon className="w-5 h-5"/>
              </button>
            </div>)}
          </div>
        </div>}
      </div>
      <div className="w-3/6 mr-5">
        <div className="py-4 px-3 mx-auto bg-white rounded-xl">
          <h3 className="text-2xl font-bold mx-5">Your Fleet</h3>
          {fleets.map((fleet: any, key: number) => <div className="flex justify-start items-center mx-5 mt-5" key={key}>
            <button className="font-bold w-14 h-14 bg-gray-400 rounded-full p-4 mr-3" onClick={() => dispatch(selectDetail(fleet))}>
              <PencilIcon className="w-6 h-6 text-gray-900"/>
            </button>
            <div className="flex flex-col">
              <div
                className="text-sm font-medium text-white bg-gray-400 w-fit rounded-lg px-2 py-0.5 mb-1">{fleet.name}</div>
              <div
                className="text-sm font-medium text-white bg-gray-300 w-64 rounded-lg px-2 py-0.5 mb-1">{fleet.manufacturer}</div>
              <ProgressBar capacity={fleet.cargo_capacity} crew={fleet.crew} passengers={fleet.passengers}/>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
};

export default Listing;