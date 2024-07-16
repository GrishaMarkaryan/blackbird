import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <Link to='/login'>
              <button> Check Now </button>
          </Link>
        </div>
      
    </div>
  )
}

export default Offers