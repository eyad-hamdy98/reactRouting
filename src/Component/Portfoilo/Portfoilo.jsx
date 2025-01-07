import React from 'react'
import "./Protfoilo.css"
import poert1 from "../../assets/poert1.png"
import poert2 from "../../assets/port2.png"
import poert3 from "../../assets/port3.png"
export default function Portfoilo() {
  return <>
      <div>
      <h1 className='text-Portfoilo fw-bold text-uppercase p-4'>start Framework</h1>
      <div className='d-flex justify-content-center align-items-center gap-3 '>
        <div className='line-Portfoilo'></div>
        <i class="icon-Portfoilo fa-solid fa-star"></i>
        <div className='line-Portfoilo'></div>
      </div>
      <p className='text-white p-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    <div className="container">
      <div className="row gap-4 pb-5">
        <div className="">
        <div className="item">
          <div className='d-flex gap-4'>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert1} alt="" />
            </div>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert2} alt="" />
            </div>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert3} alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="">
        <div className="item">
          <div className='d-flex gap-4'>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert1} alt="" />
            </div>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert2} alt="" />
            </div>
            <div className='position-relative'>
              <div className='bg-portfoilo rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-plus text-white fa-7x"></i>
                </div>
            <img className='w-100 rounded-4' src={poert3} alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
}
