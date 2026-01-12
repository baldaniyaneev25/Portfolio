import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 pt-5 ">
            <div className="l-1 d-flex">
              <h1 className='f-h1'>Let's <br /> Work Together -</h1>
              <button className='border-0 email ms-auto  fs-5'> balaniyaneev@gmail.com</button>

            </div>
            <hr />
            <div className="copyright">
              <i class="fa-regular fa-copyright"></i> 2026 all rights reserved.


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer