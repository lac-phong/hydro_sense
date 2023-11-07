import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import ExistingSheets from '../components/ExistingSheets';
import Login from '../components/Login';
import Logout from '../components/Logout';
import NameBar from '../components/NameBar';
import DataFetch from '@/components/DataFetch';
import { SpreadsheetContext } from '../components/SpreadsheetContext';
import Link from 'next/link';

const pageStyle = {
  background: '#8fb6ab'
};

const HomePage = () => {

  const [userName, setUserName] = useState('');
  const { spreadsheetInfo, setSpreadsheetInfo } = useContext(SpreadsheetContext)
  const userLoggedIn = !!userName;

  return (
    <nav style={pageStyle}>
      <br />
      <div className="flex bg-gray-100 p-4 ml-5 mt-8 mr-5 rounded-lg">
        <div className="w-1/10">
          <img
            src="/hs_logo.png"
            alt="Hydro Sense Logo"
            className="w-10 h-15"
          />
        </div>
        <div className="w-9/10">
          <h1 className="flex ml-10 mt-3.5 md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg text-center text-gray-500">
            <TypeAnimation
              sequence={[
                "HYDRO SENSE",
                30,
                "STAY ONE STEP AHEAD",
                30
              ]}
              wrapper="span"
              speed={0.5}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>

      


      <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
        <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">W E L C O M E</h1>
        {userLoggedIn && (
          <h1 className='name_text_container text-[#96BD7A] mb-4 text-6xl font-bold '>
            <span className='gradient-text bg-clip-text bg-gradient-to-r from-green-600 to-green-300'>
              {userName}
            </span>
          </h1>
        )}
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
          <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">WHY WATER OPTIMIZATION MATTERS</h1>
          <u1> 
            <li className="ml-9">Water is a finite resource, and the need for responsible water usage is more important than ever.</li>
            <li className="ml-9">By optimizing water usage in the SJSU Community Garden, we not only reduce water waste but also contribute to the preservation of our environment.</li>
            <li className="ml-9">Efficient watering practices help sustain plant life, foster a healthier ecosystem, and support a thriving community garden.</li>
          </u1>
        </div>

        <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
        <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">BENEFITS OF THE HYDROSENSE PROJECT</h1>
          <u1 className="mb-4"> 
            <li className="ml-9">Water Conservation: By optimizing watering practices, we reduce water wastage and promote responsible water usage.</li>
            <li className="ml-9">Healthy Plants: Well-monitored moisture levels lead to healthier, more vibrant plant life.</li>
            <li className="ml-9">Sustainability: The Hydro Sense Project aligns with SJSU&apos;s commitment to sustainability and environmental stewardship.</li>
            <li className="ml-9">Community Engagement: We encourage SJSU students, faculty, and local residents to actively participate in this eco-friendly endeavor.</li>
          </u1>
        </div>
      </div>


      <div className="bg-gray-100 p-4 ml-5 mt-8 mr-5 rounded-lg flex flex-col items-center justify-center">
        {!userLoggedIn && <Login setUserName={setUserName} />}
        {userLoggedIn && <Logout setUserName={setUserName} spreadsheetInfo={spreadsheetInfo} setSpreadsheetInfo={setSpreadsheetInfo} />}
        {userLoggedIn && <NameBar />}
        {userLoggedIn && <ExistingSheets />}
        {userLoggedIn && spreadsheetInfo.name && (
          <p className='text-black my-4'>SELECTED SPREADSHEET: {spreadsheetInfo.name}</p>
        )}
        {userLoggedIn && spreadsheetInfo.name && (<DataFetch />)}
      </div>


      <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-center justify-center">
        <div className="flex bg-gray-100 items-center justify-center mr-2 rounded-lg">
          <h2 className="ml-4">D I S C O R D</h2>
          <Link href="https://discord.gg/X8PGQ5WAV" target="_blank" rel="noopener noreferrer">
            <button className="ml-3 hover:bg-gray-300 p-2 rounded-lg transition duration-300">
              <Image src="/discord.png" width={50} height={50} alt="Pic1" className="rounded-full hover:animate-bounce"/>
            </button>
          </Link>
        </div>

        <div className="flex bg-gray-100 items-center justify-center ml-2 rounded-lg h-full">
          <h2 className="ml-4"> I N S T A G R A M</h2>
          <Link href="https://www.instagram.com/pnmf23/" target="_blank" rel="noopener noreferrer">
            <button className="ml-3 hover:bg-gray-300 p-2 rounded-lg transition duration-300">
              <Image src="/instagram_icon.png" width={50} height={50} alt="Pic1" className="rounded-full hover:animate-bounce"/>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-center justify-center">
        <Link href="/AboutPage">
          <button className="bn54 mr-5">
            <span class="bn54span">About Garden</span>
          </button>
        </Link>

        <Link href="/MeetTheTeam">
          <button className="bn54 ml-5">
            <span class="bn54span">Meet The Team</span>
          </button>
        </Link>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </nav>
  )
}

export default HomePage
