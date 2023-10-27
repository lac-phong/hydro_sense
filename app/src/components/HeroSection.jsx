import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (      
    <div className="top">
      <div class="container">
        <div class="content">
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <div className="wp_text_container text-black">
            <Image src="/logo.png" width={20} height={20} alt="Logo" />
            <p>
            <TypeAnimation
              sequence={[
                "HYDRO SENSE", 
                30,
                "STAY ONE STEP AHEAD", 
                30
              ]}

              wrapper="span"
              speed={1}
              style={{fontSize: '0.8em', display: 'inline-block'}}
              repeat={Infinity}
            />
            </p>
          </div>
          <h1 className="wp_text_container text-black mb-4 text-6xl font-bold">WELCOME</h1>            
          
          <h1 className='name_text_container text-[#96BD7A] mb-4 text-6xl font-bold '><span className='gradient-text bg-clip-text bg-gradient-to-r from-green-600 to-green-300'>NAME{" "}</span></h1>
          <div className='button-container'>
              <button className='custom-button'>CREATE NEW SHEET</button>
              <button className='custom-button'><span className='about-text'>EDIT EXISTING SHEET</span></button>
              <button className='custom-additional-button'><span className='about-text'> ABOUT </span><span className='garden-text'>GARDEN</span></button>
              <button className='custom-additional-button'> <span className='about-text'> EXISTING SHEETS</span> </button>
          </div>
        </div>
      </div>

        </div>
    </div>
    </div>
  )
}

export default HeroSection
