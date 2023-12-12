import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbars = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#e9e8e6" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">KELLY</a>
        <div className='icon d-block d-md-none d-lg-none'>
          <ul className='main' >
            <li className='icona'>
              <FaFacebook />
            </li>
            <li className='icona'>
              <FaLinkedin />
            </li>
            <li className='icona'>
              <FaInstagramSquare />
            </li>
            <li className='icona'>
              <FaTwitterSquare />
            </li></ul>

        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li class="nav-item">
              <Link class="nav-link activ ms-auto" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/resume">Resume</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contacts</Link>
            </li>

          </ul>

        </div>
        <div className='icon d-none d-lg-block'>
          <ul className='main' >
            <li className='icona'>
              <FaFacebook />
            </li>
            <li className='icona'>
              <FaLinkedin />
            </li>
            <li className='icona'>
              <FaInstagramSquare />
            </li>
            <li className='icona'>
              <FaTwitterSquare />
            </li></ul>

        </div>
      </div>
    </nav>
  )
}
export default Navbars
