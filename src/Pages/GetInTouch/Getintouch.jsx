import React from 'react'
import "../GetInTouch/GetTouch.css"

const Getintouch = () => {
  return (
    <>




      <form action="https://formsubmit.co/baldaniyaneev81@gmail.com" method="POST" id='contact' className="contact-form mt-5 pt-5 mb-5 pb-5" >
        <h1 className='text-center ' >Get In Touch</h1>
        <p className='text-center' style={{ color: " rgb(119, 202, 237)" }}>Let's work together</p>
        <input type="text " name="name" className='mt-4' placeholder="Full Name" />
        <input type="email " name="email" className='mt-2' placeholder="Email" />
        <textarea placeholder="Message" name="message" className='mt-2'></textarea>
        <button className='get-btn mt-4' type='submit' >Get In Touch</button>
      </form>






    </>
  )
}

export default Getintouch