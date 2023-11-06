import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MeetTheTeam = () => {
  return (
    <nav>
        <h1 className="flex text-base md:text-5xl lg:text-6xl font-bold">HYDRO SENSE PROJECT AND TEAM</h1>

        <br/>
       
        <h3>ABOUT THE PROJECT</h3>
        <u1>
            <li>The object of the Hydro Sense Project was to help out SJSU community garden to optimize its water usage</li>
            <li>We wanted to achieve this by automating the process of recording the moisture and temperature data throughout the day for the garden to develop better watering practices and systems</li>
        </u1>
        <br/>
        <br/>
        <h3>ABOUT THE TEAM</h3>

    
      <div> 
      <u1> 
        <li>The teams for this project consists of 17 Fall '23 Potential New Members of the San Jose State University Theta Tau Professional Engineering Fraternity</li>
      <li>The members were split into four teams, including the hardware, microcontroller, frontend, and backend teams</li>
      </u1> 

      <br/>
      Here are the members of all the teams!
      <u1> 
      <li>Hardware Team: Chris Wong, Justin Doan, Kevin Bautista, Janelle Bautista, Manan Upadhyay, Ethan Nyugen, Sid Nayak</li>
      <li>Microcontroller Team: James Kim, Michelle Kim, Drew Tom</li>
      <li>Frontend Team: David Song, Alan Wang, Krishiv Haranath</li>
      <li>Backend Team: Lac-Phong Nyugen, Stefan Le, Julia Husainzada, Akshitaa Balasai</li>
      </u1> 
      <br/>
      <br/>
      
      </div>
      <Image src="/HydroSenseTeam.jpg" width={500} height={500} alt="Pic1"/>


      <div className="flex justify-center items-center"> {/**/}
      </div>

      <div>

      </div>


      <Link href="https://discord.gg/X8PGQ5WAV" target="_blank" rel="noopener noreferrer">
        <button  className="p-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
        <Image src="/discord-logo.png" width={50} height={50} alt="Pic1"/>
        </button>
      </Link>

      <br />

      <Link href="https://www.instagram.com/pnmf23/" target="_blank" rel="noopener noreferrer">
        <button  className="p-2 bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">
        <Image src="/insta-logo.png" width={50} height={50} alt="Pic1"/>
        </button>
      </Link>

      <br />

      <Link href="/">
        <button>
          Home
        </button>
      </Link>

      <br />

      <Link href="/AboutPage">
        <button>
          About Garden
        </button>
      </Link>
    </nav>
  )
}

export default MeetTheTeam