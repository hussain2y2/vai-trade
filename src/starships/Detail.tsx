import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";

const Detail = ()  => {
  const {detail} = useSelector((state: RootState) => state.starship);
  console.log(detail)
  return(
    <div>
      Detail
    </div>
  );
};

export default Detail;