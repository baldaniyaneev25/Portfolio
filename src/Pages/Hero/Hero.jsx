import React from 'react'
import "../Hero/Hero.css"

const Hero = () => {
  return (
    <>

      {/* <div className="container">
        <div className="row">
          <div className="col ">
            <div className="main-container text-center pt-5 text-light mt-5">
              <div className="photo  text-center mt-4">
                <img src="remove (2).png" className='' alt="" />

              </div>
              <h1 className='mt-2 '>Neev Baldaniya</h1>
              <h5 className='mt-2 h5-heading'>Full Stack Devloper</h5>
              <p className='mt-2'>I am a Full Stack Developer skilled in building responsive  and <br /> scalable  web applications. I enjoy solving real-world  problems  using <br />  modern frontend and  backend technologies.</p>


              <button className='hero-contect mt-3'>Contect Me</button>
            </div>
          </div>
        </div>
      </div> */}


      <div id="home" className="hero mt-5 pt-5 text-center">
        <img src="/remove (2).png" className="hero-img mt-5 pt-5" />
        <h1>Neev Baldaniya</h1>
        <h5 className="highlight mt-1">Full Stack Developer</h5>
        <p className="hero-text mt-1">I am a Full Stack Developer skilled in building responsive  and <br /> scalable  web applications. I enjoy solving real-world  problems  using <br />  modern frontend and  backend technologies.

        </p>
        <button className="hero-btn mt-5">Contact Me</button>
      </div>




    </>
  )
}

export default Hero