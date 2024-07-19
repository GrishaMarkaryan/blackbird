import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'> Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p> BLACKBIRD is a contemporary clothing brand known for its minimalist designs and high-quality materials. The brand focuses on creating timeless, versatile pieces that blend modern aesthetics with classic styles, catering to fashion-forward individuals who value both style and substance. </p>
        </div>
    </div>
  )
}

export default DescriptionBox