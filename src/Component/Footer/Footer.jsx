import React from 'react'
import "./Footer.css"

export default function Footer() {
  return <>
  <div className="footer-bg position-relative bottom-0 start-0 end-0">
  <div className="container">
    <div className="row">
      <div className="col md-4">
        <div className="item d-flex justify-content-between ">
          <div className='text-white'>
            <h1>LOCATION</h1>
            <h6>2215 John Daniel Drive</h6>
            <p>Clark, MO 65243</p>
          </div>
          <div className='text-white'>
            <h1>AROUND THE WEB</h1>
            <div className='d-flex justify-content-center gap-3'>
            <div className='icon rounded-circle d-flex justify-content-center align-content-center'>
              <div className='d-flex justify-content-center align-items-center'>
              <i class="fa-brands fa-facebook"></i>
              </div>
            </div>
            <div className='icon rounded-circle d-flex justify-content-center align-content-center'>
              <div className='d-flex justify-content-center align-items-center'>
              <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div className='icon rounded-circle d-flex justify-content-center align-content-center'>
              <div className='d-flex justify-content-center align-items-center'>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className='icon rounded-circle d-flex justify-content-center align-content-center'>
              <div className='d-flex justify-content-center align-items-center'>
              <i class="fa-solid fa-globe"></i>
              </div>
            </div>
            </div>
          </div>
          <div className='text-white'>
            <h1>ABOUT FREELANCER</h1>
            <h6>ABOUT FREELANCER</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
    <div className='bg-Copyright position-absolute start-0 end-0'>
      <p className='p-3 text-white'>Copyright © Your Website 2021</p>
    </div>
  </>
}
