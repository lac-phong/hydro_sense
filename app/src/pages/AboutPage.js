import React from 'react'
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
        <u1>
          <li>Tuesdays and Thursdays 8:30am-11am & Saturdays 9am-11am</li>
          <li>Please register at <a href='https://linktr.ee/SJSUGarden'>https://linktr.ee/SJSUGarden.</a></li>
          <li>Open Hours:August 28 - December 8; Mondays 8am - 2pm</li>
        </u1>

        <h2>Who We are</h2>
        <u1>
          <li>In 2014, the SJSU Campus Community Garden was established as a result of a student-led initiative. The garden was created to provide students a space to gain access to healthy food, learn about sustainable organic garden practices and earn service learning hours.</li>
          <li>The garden is located at 372 E. San Salvador Street (across from the Dining Commons)</li>
        </u1>
      </div>
    </nav>
  )
}

export default AboutPage