import React from 'react'
import "./Contact.css"

export default function Contact() {
  return <>
        <div>
      <h1 className='text-contact fw-bold text-uppercase p-4'>start Framework</h1>
      <div className='d-flex justify-content-center align-items-center gap-3 '>
        <div className='line-contact'></div>
        <i class="icon-contact fa-solid fa-star"></i>
        <div className='line-contact'></div>
      </div>
    </div>
    <div className="container p-4 w-50">
      <div className="row">
        <div className="col-md-12">
          <div className="item">
            <div className=''>
              <input className='form-control m-4' type="text" name="" id="" placeholder='userName' />
              <input className='form-control m-4' type="number" name="" id="" placeholder='userAge' />
              <input className='form-control m-4' type="email" name="" id="" placeholder='userEmail' />
              <input className='form-control m-4' type="password" name="" id="" placeholder='userPassword' />
              <button type="submit" class="btn text-white d-flex m-4">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
