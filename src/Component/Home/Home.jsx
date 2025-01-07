import React from 'react'
import "./Home.css"
import boy from "../../assets/avataaars.svg"

export default function Home() {
  return <>
  <div className='bg-Home'>
  <div className='p-5'>
  <img className='w-25' src={boy} alt="" />
    <div>
      <h1 className='fw-bold text-uppercase text-white p-4'>start Framework</h1>
      <div className='d-flex justify-content-center align-items-center gap-3 '>
        <div className='line'></div>
        <i class="fa-solid fa-star text-white"></i>
        <div className='line'></div>
      </div>
      <p className='text-white p-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  </div>
  </>
}
