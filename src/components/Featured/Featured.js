import React from 'react'
import pic from "../../Assests/Images/profile1.png";
import Product from '../Product/Product';
function Featured() {
  return (
    <div>
      <img src={pic} alt='pic'/>
      <Product/>
    </div>
  )
}

export default Featured
