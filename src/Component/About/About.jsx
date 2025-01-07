import React from 'react'
import "./About.css"

export default function About() {
  return <>
    <div className='bg-About'>
    <div className=' p-5'>
      <div>
        <h1 className='fw-bold text-uppercase text-white'>about component</h1>
        <div className='d-flex justify-content-center align-items-center gap-3 p-3'>
          <div className='line'></div>
          <i class="fa-solid fa-star text-white"></i>
          <div className='line'></div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 ">
            <div className="item text-start text-white p-3 ">
              <div className='d-flex gap-4'>
              <p className='w-75 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,  CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className='w-75'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}
