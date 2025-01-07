import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let nav = document.querySelector("nav")
  let link = document.querySelectorAll(".link")

  link.forEach(function(a){
    a.addEventListener("click", function(){
      nav.querySelector(".active").classList.remove("active")
      a.classList.add("active")
    })
  })



  return (
    <div className='background p-5 '>
      <div className="container d-flex justify-content-between">
      <div className=''>
        <NavLink className='text-white fw-bold fa-2xl text-uppercase text-decoration-none' to="/">Start Framework</NavLink>
      </div>
      <ul className='nav d-flex gap-5 list-unstyled'>
        <li><NavLink className='link text-white fw-bold text-decoration-none fs-5 text-uppercase' to="About">About</NavLink></li>
        <li><NavLink className='link text-white fw-bold text-decoration-none fs-5 text-uppercase' to="Portfoilo">Portfoilo</NavLink></li>
        <li><NavLink className='link text-white fw-bold text-decoration-none fs-5 text-uppercase' to="Contact">Contact</NavLink></li>
      </ul>
      </div>
    </div>
  )
}

