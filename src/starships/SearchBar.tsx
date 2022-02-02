import React, {useState} from 'react';
// Hero Icons
import {SearchIcon} from '@heroicons/react/solid';
// Redux stuff
import {useDispatch} from 'react-redux';
import {setStarships} from './starshipSlice';
// Custom utils
import {Api, useDebouncedEffect} from '../utils';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  // Redux dispatcher
  const dispatch = useDispatch();
  const url = '/api/starships';

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
  return (
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
  );
}

export default SearchBar;