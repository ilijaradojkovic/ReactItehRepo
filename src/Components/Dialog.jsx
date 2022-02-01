import React from 'react';

function Dialog() {
  return (
      <div className='dialog  flex-column align-items-center p-4 d-flex justify-content-around'>
          <div className=" form-outline topDeo d-flex justiify-content-center   flex-column" >
                   
          <label class="form-label d-flex justify-content-center" for="numberField"> <h2>Uplata</h2></label>  
          <input className='form-control' type="number"id="numberField" ></input>
         
          </div>
          
         
          <div className=' DialogButtons w-75  d-flex justify-content-around'>
          <button className='col-5 border-0 rounded'>Odustani</button>
            <button className='col-5  border-0 rounded'>Uplati</button>
           
          </div>
      </div>
  );
}

export default Dialog;
