import React from 'react';
import { Link } from 'react-router-dom';

function Product() {
  return <div className='Apartman   col-7   justify-content-center d-flex flex-column align-items-center'>
     

    
    <img src="http://soko-zabava.info/wp-content/uploads/apartman-beograd.jpg" className='image' ></img>

      

   
      <h3 className='p-4'>Title</h3>
      <h4>500$</h4>
  
      <button className='dugme col-6 m-4  '>
        
      <Link to="/Apartman/1" style={{ textDecoration:'none'}}>
      Reserve</Link></button>
      

  </div>;
}

export default Product;
