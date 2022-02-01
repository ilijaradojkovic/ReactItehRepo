import React, { useState } from 'react';
import {FaBed} from 'react-icons/fa';
import {MdAir} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {GiResize} from 'react-icons/gi';
import {IoMdPricetags} from 'react-icons/io';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function DetailsApartman() {

   const [date,setDate] =useState(new Date());
   
   const onChange=d=>{
     //setDate(d);
   }
  return (<>
  
      <div className='test'  style={{
   
    
    backgroundImage: `url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80)`
  }}>
      
      </div>

      <div className="iconsinfo p-4 d-flex justify-content-around">
     
        
      <div className="element ">
              <IoMdPricetags size={60}></IoMdPricetags>
              <p className='w-100 d-flex justify-content-center'>33$</p>
              </div>
              <div className="element ">
              <FaBed size={60}></FaBed>
              <p className='w-100 d-flex justify-content-center'>3 Kreveta</p>
              </div>
      
              <div className="element ">
              <MdAir size={60}></MdAir>
              <p className='w-100 d-flex justify-content-center'>Klimatizovano</p>
              </div>
              <div className="element ">
              <AiOutlineWifi size={60}></AiOutlineWifi>
              <p className='w-100 d-flex justify-content-center'>WiFi</p>
              </div>
              <div className="element ">
              <GiResize size={60}></GiResize>
              <p className='w-100 d-flex justify-content-center'>Kvadratura</p>
              </div>


      </div>
      <div className="calendarContainer    w-100 d-flex justify-content-center">
      <Calendar selectRange={true}  onChange={onChange} minDate={date}  ></Calendar>

      </div>
      <div className="ContainerButton  m-5 d-flex justify-content-center">
      <button className='dugme col-3'>
        Reserve
      </button>
      </div>
      
   
    
  </>);
}

export default DetailsApartman;
