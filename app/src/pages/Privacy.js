import React from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'


const pageStyle = {
 background: '#8fb6ab'
};


const Privacy = () => {
 return (
   <nav  style={pageStyle}>
     <br />
     <div className="bg-gray-100 p-4 ml-5 mt-8 mr-5 rounded-lg">
       <h1 className="wavy text-base sm:text-3.5xl md:text-4xl lg:text-4.5xl font-bold text-center">PRIVACY POLICY</h1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">POLICY</h1>
       <u1>
         <li className="ml-9">This Privacy Policy outlines the practices for collecting, using, maintaining, and disclosing the information collected by the SJSU Campus Community Garden project.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">INFORMATION COLLECTION AND USE</h1>
       <u1>
           <li className="ml-9">The SJSU Campus Community Garden project collects data about the temperature and moisture of the soil over a period of time.</li>
           <li className="ml-9">This data is used to help the gardeners optimize their watering patterns and develop better gardening practices.</li>
           <li className="ml-9">The data is collected and analyzed using a moisture sensor device.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">DATA SHARING</h1>
       <u1>
         <li className="ml-9">The data collected by the project is shared with the users of the device for further analysis.</li>
         <li className="ml-9">This data is used for the sole purpose of optimizing water usage and improving gardening practices.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">DATA STORAGE</h1>
       <u1>
           <li className="ml-9">The data collected is stored in a secure database.</li>
           <li className="ml-9">The data is stored for the duration of the project and is deleted once the project is completed.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">DATA SECURITY</h1>
       <u1>
           <li className="ml-9">The data collected by the project is stored in a secure database.</li>
           <li className="ml-9">The database is protected by multiple layers of security measures to prevent unauthorized access.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">CHANGES TO THIS PRIVACY POLICY</h1>
       <u1>
           <li className="ml-9">We may update our Privacy Policy from time to time.</li>
           <li className="ml-9">We will notify you of any changes by posting the new Privacy Policy on this page.</li>
       </u1>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">CONTACT US</h1>
       <u1>
           <li className="ml-9">If you have any questions about this Privacy Policy, please contact us at</li>
           <li className="ml-9">[lac-phong.nguyen@sjsu.edu]</li>
       </u1>
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
             <Image src="/Instagram_icon.png" width={50} height={50} alt="Pic1" className="rounded-full hover:animate-bounce"/>
           </button>
         </Link>
       </div>
     </div>


     <div className="flex bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-center justify-center">
       <Link href="/">
         <button className="bn54 mr-5">
           <span class="bn54span">Home</span>
         </button>
       </Link>


       <Link href="/AboutPage">
       <button className="bn54 ml-5">
           <span class="bn54span">About Garden</span>
         </button>
       </Link>


       <Link href="/MeetTheTeam">
       <button className="bn54 ml-10">
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


export default Privacy
