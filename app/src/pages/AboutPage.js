import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const pageStyle = {
  background: '#8fb6ab'
};

const AboutPage = () => {
  const carouselStyle = {
    maxWidth: '750px', // Set a maximum width for the carousel
    margin: '0 auto',  // Center the carousel
  };

 return (
   <nav style={pageStyle}>
    <br />
    <div className="bg-gray-100 p-4 ml-5 mt-8 mr-5 rounded-lg">
       <h1 className="wavy text-base sm:text-3.5xl md:text-4xl lg:text-4.5xl font-bold text-center">ABOUT THE GARDEN</h1>
     </div>
     <div className="flex flex-col lg:flex-row">
     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
         <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold rounded-lg">VOLUNTEER HOURS</h1>
         <u1>
           <li className="ml-9"><span className="underline">Dates</span>: Augest 28 - December 8</li>
           <li className="ml-9"><span className="underline">Times</span>: Tuesdays and Thursdays 8:30am-11am & Saturdays 9am-11am</li>
           <li className="ml-9"><span className="underline">Garden Link</span>: <a href='https://linktr.ee/SJSUGarden'  target="_blank" rel="noopener noreferrer">https://linktr.ee/SJSUGarden.</a></li>
           <li className="ml-9"><span className="underline">Open Hours</span>: August 28 - December 8; Mondays 8am - 2pm</li>
         </u1>
       </div>
       <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg items-stretch">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">WHO THEY ARE</h1>
         <u1 className="mb-4">
           <li className="ml-9">In 2014, the SJSU Campus Community Garden was established as a result of a student-led initiative. The garden was created to provide students a space to gain access to healthy food, learn about sustainable organic garden practices and earn service learning hours.</li>
           <li className="ml-9">The garden is located at 372 E. San Salvador Street (across from the Dining Commons)</li>
         </u1>
       </div>
     </div>


     <div className="bg-gray-100 p-4 ml-5 mt-2 mr-5 mb-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">PURPOSE</h1>
       <u1>
         <li className="ml-9">The object of the Hydro Sense Project was to help out <span className="underline font-semibold">SJSU Community Garden</span> to <span className="underline font-semibold">optimize</span> its water usage</li>
         <li className="ml-9">We wanted to achieve this by automating the process of recording the moisture and temperature data throughout the day for the garden to develop better watering practices and systems</li>
       </u1>
      
     </div>

     <div className="bg-gray-100 p-4 ml-5 mt-2 mr-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">SUSTAINABILITY AT THE GARDEN</h1>
       <u1>
         <li className="ml-9">The community garden is chemical free (organic) which means that we do not use any pesticides or synthetic fertilizers. Furthermore, our garden is designed around the principles of permaculture and regenerative agriculture, meaning that we try to imitate the natural process. In the garden we have over sixty different plant species from perennial fruit trees and flowers to annual vegetable crops. Our garden ecosystem is diverse with multiple pollinators and creatures.</li>
         <li className="ml-9">We have our own composting and gray water system that allows us to reuse and reduce our organic waste. Everything is incorporated into our garden again using sustainable methods.</li>
       </u1>
     </div>



     <div className="bg-gray-100 p-4 ml-5 mt-5 mr-5 mb-5 rounded-lg">
       <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">THEIR CONTACT INFORMATION</h1>
       <u1>
         <li className="ml-9">Matthew Mangoni [ Garden Coordinator ]</li>
         <li className="ml-9">matthew.mangoni@sjsu.edu</li>
         <li className="ml-9">Please contact Matthew at the soonest for any sign language interpreter or other accommodation requests.</li>
       </u1>
     </div>


     <div className="flex bg-gray-100 p-4 ml-5 mt-2 mr-5 mb-5 rounded-lg items-center justify-center">
       <div className="w-5/6 flex flex-col items-center overflow-x-auto">
         <h1 className="flex bg-gray-200 p-2 inline-block text-base md:text-2xl lg:text-3xl font-bold mb-2 rounded-lg">
           GARDEN PICS
         </h1>
         <div className="space-x-4" style={carouselStyle}>
            <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={3000}>
              <div>
                <Image src="/IMG_7821.jpg" width={300} height={200} alt="Pic2" />
              </div>
              <div>
                <Image src="/IMG_7822.jpg" width={300} height={200} alt="Pic3" />
              </div>
              <div>
                <Image src="/IMG_7823.jpg" width={300} height={200} alt="Pic4" />
              </div>
            </Carousel>
          </div>
       </div>
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


       <Link href="/MeetTheTeam">
       <button className="bn54 ml-5">
           <span class="bn54span">MEET THE TEAM</span>
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

export default AboutPage