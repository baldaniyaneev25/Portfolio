import React from 'react'
import "../AboutMe/Aboutme.css"

const Aboutme = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="row mt-5 pt-5 text-center">
          <div className="col mt-5 pt-5">
            <h1 className=''>About Me</h1>
            <p className='get-about'>Get to Know me</p>
            <br /><br />
            <p className=''>I am a passionate Full Stack Developer with a strong interest  in building modern, <br /> responsive, and user-friendly web applications.  I enjoy transforming ideas  in to <br /> functional digital products using clean and efficient code.</p>

            <p className='mt-4'>I work across both frontend and backend technologies, focusing  on performance ,<br /> scalability, and good user experience. I continuously learn  new  tools  and  frameworks <br />  to  improve my development skills and stay up to date with industry trends.</p>

            <p className='mt-4'>I am motivated, detail-oriented, and always excited to work on  real-world  projects.  My goal is <br /> to grow as a developer while contributing to impactful and  meaningful applications.</p>

            <button className='Aboutme-btn mt-3'>Download Resume</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme