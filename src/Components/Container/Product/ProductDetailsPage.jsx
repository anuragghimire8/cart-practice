import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetailsPage = () => {
    let location=useLocation()
    console.log(location);
  return (
    <div>
      <img src= {location?.state?.data?.image} alt="/" style={{height:"180px",width:"290px"}}></img>
      <p>Name: {location?.state?.data?.name}</p>
      <p>Price: {location?.state?.data?.price}</p>
      <p>Count: {location?.state?.data?.count}</p>
    </div>
  )
} 

export default ProductDetailsPage
