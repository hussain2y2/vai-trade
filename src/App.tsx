import React from 'react';
import Listing from './starships/Listing';
import Detail from './starships/Detail';
import {useSelector} from 'react-redux';
import {RootState} from './store';

function App() {
  const {detail} = useSelector((state: RootState) => state.starship);
  return (
    <div className="p-3 bg-gray-50 h-screen min-h-full">
      {Object.keys(detail).length ? <Detail/> : <Listing/>}
    </div>
  );
}

export default App;
