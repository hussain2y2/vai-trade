import React from 'react';
import Fleets from './Fleets';
import Starships from './Starships';
import SearchBar from './SearchBar';

const Listing = () => {
  return (
    <div className="flex justify-center m-5">
      <div className="w-4/6 ml-5">
        <h1 className="text-4xl font-bold">Star Fleet Manager</h1>
        <SearchBar/>
        <Starships/>
      </div>
      <Fleets/>
    </div>
  )
};

export default Listing;