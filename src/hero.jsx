import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import HeroSection from '../src/assets/HeroSection.png'

function Hero() {
  return (
    <><div className="hero bg-base-200">
    <div className="hero-content  flex flex-col lg:flex-row">
      <img
        src={HeroSection}
        className="max-w-sm rounded-lg" />
      <div>
        <h3 className="text-2xl font-bold">BATCH 2023 - (BCA)</h3>
      </div>
    </div>
  </div></>
  )
}

export default Hero