import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import ExistingSheets from '../components/ExistingSheets'
import Login from '../components/Login';
import Logout from '../components/Logout';
import NameBar from '../components/NameBar';
import { SpreadsheetContext } from '../components/SpreadsheetContext';
import Link from 'next/link';

const HomePage = () => {

    const [userName, setUserName] = useState('');
    const { spreadsheetInfo } = useContext(SpreadsheetContext)

    return (      
    <div className="top">
      <div className="container">
        <div className="content">
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
          
          <h1 className='name_text_container text-[#96BD7A] mb-4 text-6xl font-bold '><span className='gradient-text bg-clip-text bg-gradient-to-r from-green-600 to-green-300'>{userName}</span></h1>
          <div className='button-container'>  
              <Login setUserName = {setUserName} />
              <Logout setUserName = {setUserName} />
              <NameBar />
              <ExistingSheets />
              <p className='text-black'>Spreadsheet name: {spreadsheetInfo.name}</p>
                <Link href='/AboutPage'>                 
                    <button className='custom-additional-button'><span className='about-text'> ABOUT </span><span className='garden-text'>GARDEN</span></button>
                </Link>

              <br />
                <Link href='/MeetTheTeam'>                 
                    <button className='custom-additional-button'>MEET THE TEAM</button>
                </Link>

                <Link href='/DataFetch'>                 
                        <button className='custom-button'>Fetch Data</button>
                </Link>
          </div>
        </div>
        
      </div>

        </div>
    </div>
    </div>
    
  )
}

export default HomePage
