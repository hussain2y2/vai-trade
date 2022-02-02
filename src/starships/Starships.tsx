import React, {useState} from 'react';
// Hero Icons
import {PlusIcon, SearchIcon} from '@heroicons/react/solid';
// Redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setStarships, addFleet} from './starshipSlice';
// Custom utils
import {Api, useDebouncedEffect} from '../utils';

const Starships = () => {
  const [searchText, setSearchText] = useState('');
  const {fleets, starships} = useSelector((state: RootState) => state.starship);
  const dispatch = useDispatch();

  let url = '/api/starships';

  // Debounced effect for fetching starships from swapi.
  useDebouncedEffect(() => Api.get(searchText ? `${url}/?search=${searchText}` : url)
      .then(response => {
        const {results}: any = response.data;
        dispatch(setStarships(results));
      })
      .catch(error => {
        console.log(error);
      }),
    [searchText],
    500
  );

  // Add starship to fleet list
  const addFleetHandler = (fleet: any) => {
    if (!fleets.find((f: any) => f.name === fleet.name)) {
      dispatch(addFleet(fleet))
    }
  }

  return(
    <div className="w-4/6 ml-5">
      <h1 className="text-4xl font-bold">Star Fleet Manager</h1>
      <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <SearchIcon className="w-6 h-6"/>
            </button>
          </span>
        <input
          type="search"
          className="py-3 w-8/12 text-sm text-gray-600 bg-gray-200 border-1 rounded-md pl-10 focus:outline-none focus:text-gray-600"
          placeholder="Search..." autoComplete="off"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {starships && <div className="border-gray-200 mt-5 w-8/12">
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
      </div>}
    </div>
  );
}

export default Starships;