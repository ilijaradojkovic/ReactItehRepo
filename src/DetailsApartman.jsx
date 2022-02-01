import React from 'react';
import {FaBed} from 'react-icons/fa';
import {MdAir} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {GiResize} from 'react-icons/gi';
import {IoMdPricetags} from 'react-icons/io';




function DetailsApartman() {
   
  return (<>
      <div className=''>
            <img  className='imageC' src="http://soko-zabava.info/wp-content/uploads/apartman-beograd.jpg"></img>
      </div>

      <div className="iconsinfo p-4 d-flex justify-content-around">
     
        
      <div className="element ">
              <IoMdPricetags size={80}></IoMdPricetags>
              <p className='w-100 d-flex justify-content-center'>33$</p>
              </div>
              <div className="element ">
              <FaBed size={80}></FaBed>
              <p className='w-100 d-flex justify-content-center'>3 Kreveta</p>
              </div>
      
              <div className="element ">
              <MdAir size={80}></MdAir>
              <p className='w-100 d-flex justify-content-center'>Klimatizovano</p>
              </div>
              <div className="element ">
              <AiOutlineWifi size={80}></AiOutlineWifi>
              <p className='w-100 d-flex justify-content-center'>WiFi</p>
              </div>
              <div className="element ">
              <GiResize size={80}></GiResize>
              <p className='w-100 d-flex justify-content-center'>Kvadratura</p>
              </div>


      </div>
      <button className='dugme'/>
    
  </>);
}

export default DetailsApartman;
