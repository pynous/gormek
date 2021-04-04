import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import { BiPlayCircle } from "react-icons/bi";


function HeroSection() {
    return (
        <div className="hero-container">
         <h1>ADVENTURE AWAITS</h1>
         <p>What are you looking for?</p>
         <div className="hero-btns"> 
         <Button className="btns" buttonStyles="btn--outline" 
         buttonSize="btn--large">GET STARTED
         </Button>
         <Button className="btns" buttonStyles="btn--primary" 
         buttonSize="btn--large">WATACH TRAILER<BiPlayCircle className="play"/>
         </Button>
         </div>

            
        </div>
    )
}

export default HeroSection
