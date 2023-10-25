import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (      
    <div className="flex">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <div className="wp_text_container text-black">
            <Image src="/logo.png" width={20} height={20} alt="Logo" />
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
          </div>
          <h1 className="wp_text_container text-black mb-4 text-6xl font-bold">WELCOME</h1>            
        </div>
      </div>
    </div>
  )
}

export default HeroSection