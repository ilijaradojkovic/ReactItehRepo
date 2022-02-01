import React from 'react';
import {BsBuilding} from 'react-icons/bs';
function TopBar() {
  return <div className='TopBar  p-4  d-flex '>


      <BsBuilding size={50}></BsBuilding>
      <h1 className='mx-3 h-100 d-flex  flex-column  justify-content-center '>Apartmani</h1>
  </div>;
}

export default TopBar;
