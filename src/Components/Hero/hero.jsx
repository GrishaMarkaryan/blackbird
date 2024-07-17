import React, { useEffect } from 'react'
import './Hero.css'
import smoothscroll from 'smoothscroll-polyfill'
import hero_image from '../Assets/hero_image.png'

const Hero = ({targetRef}) => {

    function scrollTo () {
        targetRef.current && targetRef.current.scrollIntoView({behavior: 'smooth'})
    }

    useEffect (()=>{
        smoothscroll.polyfill()
    }, [])

  return (
    <div className='hero'>
        <div className="hero-left">
            <div>
                <div className="hero-hand-icon">
                    <p> BOLD </p>
                </div>
                <p> BRAVE </p>
                <p> BLACKBIRD </p>
            </div>
            <div className="hero-latest-btn" onClick={scrollTo}>
                View latest collections 
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>          

    </div>
  )
}

export default Hero