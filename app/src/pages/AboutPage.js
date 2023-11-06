import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <nav>
    <div className="top"></div>
      <div class="container"></div>
        <div class="content"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12"></div>
        <div className="col-span-7 place-self-center"></div>
      <div>
        <h1 className="text-black mb-5 text-4xl font-bold">About the SJSU Garden</h1>
      </div>

      <div>
        <h2>Volunteer Hours:</h2>
        <p>Augest 28 - December 8</p>
        <ul>
          <li>Tuesdays and Thursdays 8:30am-11am & Saturdays 9am-11am</li>
          <li>Please register at <a href='https://linktr.ee/SJSUGarden'>https://linktr.ee/SJSUGarden.</a></li>
          <li>Open Hours:August 28 - December 8; Mondays 8am - 2pm</li>
        </ul>

        <h2>Who We are</h2>
        <ul>
          <li>In 2014, the SJSU Campus Community Garden was established as a result of a student-led initiative. The garden was created to provide students a space to gain access to healthy food, learn about sustainable organic garden practices and earn service learning hours.</li>
          <li>The garden is located at 372 E. San Salvador Street (across from the Dining Commons)</li>
        </ul>

        <h2>Pictures</h2> 
          <h5>The Garden: </h5>
          <Image src="/garden1.jpeg" width={50} height={50} alt="Pic1"/>
          <Image src="/garden2.jpeg" width={50} height={50} alt="Pic2"/>
          <Image src="/garden3.jpg" width={50} height={50} alt="Pic3"/>
          <Image src="/IMG_7821.jpg" width={50} height={50} alt="Pic4"/>
          <Image src="/IMG_7822.jpg" width={50} height={50} alt="Pic5"/>
          <Image src="/IMG_7823.jpg" width={50} height={50} alt="Pic6"/>

        <h2>Purpose</h2>
        <ul>
          <li>The garden is on a quarter acre of land and it includes multiple fruit trees, compost and gray water system. The garden exists to provide the SJSU students, staff, faculty, and the surrounding community with an opportunity to participate in food justice, accessibility to fresh and healthy food while engaging in cultural exchange and cooperation.</li>
          <li>The community garden is a place where students can learn and participate in the process of growing food sustainably, but it does not end there! Students can also harvest and enjoy organic, free, and locally grown produce. This space provides a place for student initiative, cooperation and cultural exchange using the growing of food as an exploration of community involvement.</li>
        </ul>

        <h2>Sustainability at the Garden</h2>
        <ul>
          <li>The community garden is chemical free (organic) which means that we do not use any pesticides or synthetic fertilizers. Furthermore, our garden is designed around the principles of permaculture and regenerative agriculture, meaning that we try to imitate the natural process. In the garden we have over sixty different plant species from perennial fruit trees and flowers to annual vegetable crops. Our garden ecosystem is diverse with multiple pollinators and creatures.</li>
          <li>We have our own composting and gray water system that allows us to reuse and reduce our organic waste. Everything is incorporated into our garden again using sustainable methods.</li>
        </ul>

        <h2>Follow Us on Instagram:</h2>
        <a href='https://www.instagram.com/sjsugarden/'>@sjsugarden</a>
        
        <h3>Questions?</h3>
        <p>Contact Matthew Mangoni, Garden Coordinator, at matthew.mangoni@sjsu.edu. This event is wheelchair accessible. Please contact Matthew at the soonest for any sign language interpreter or other accommodation requests.</p>
      </div>

    </nav>
  )
}

export default AboutPage