import React from 'react';
import Fleets from './Fleets';
import Starships from './Starships';

const Listing = () => {
  return (
    <div className="flex justify-center m-5">
      <Starships/>
      <Fleets/>
    </div>
  )
};

export default Listing;