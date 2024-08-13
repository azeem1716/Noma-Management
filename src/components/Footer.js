import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaMobileAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer '>
     <div className='container max-width'>
     <div className='container max-width'>
      <div className='row '>
        <div className='col-12 col-md-6 col-xl-3 '>
          <h2 className='ms-xl-3 mb-xl-5 text-md montserrat-medium secondary-text text-uppercase footer-link'>About</h2>
          <ul className='list-unstyled g-3 secondary-text montserrat-regular'>
            <li className='mb-3'>
             <a href='#'> <div className='d-flex justify-content-start align-content-start gap-2'>
                <FaLocationDot/>
                <h2 className='text-sm '>Address</h2>
              </div>
                <span className='text-sm ms-3'>150 Torrent Court Street, PK</span></a>
              </li>
              <li className='mb-3'>
             <a href='#'>
             <div className='d-flex justify-content-start align-content-start gap-2'>
              <FaMobileAlt />
                <h2 className='text-sm '>Call Us 24/7</h2>
              </div>
                <span className='small-paragraph ms-3'>(+92) 03058587336</span>
             </a>
              </li>
              <li className='mb-3'>
             <a href='#'>
             <div className='d-flex justify-content-start align-content-start gap-2'>
              <MdEmail />
                <h2 className='text-sm '>Email</h2>
              </div>
                <span className='text-sm ms-3'>info@bostonea.com</span>
             </a>
              </li>
          </ul>
        </div>
        <div className='col-12 col-md-6 col-xl-3'>
        <h2 className=' mb-xl-5 text-md montserrat-medium secondary-text text-uppercase text-uppercase footer-link'>Contact Info</h2>
        <ul className='list-unstyled secondary-text montserrat-regular'>
            <li className='mb-2'>
              <a href='#'  className='text-sm'>  Home</a>
            </li>
            <li className='mb-2'>
              <a href='#' className='text-sm'>About Us</a></li>
            <li className='mb-2 text-sm'><a href='#'>Our Room</a></li>
            <li className='mb-2 text-sm'><a href='#'>Blog</a></li>
            <li className='mb-2 text-sm'><a href='#'>Contact US</a></li>
          </ul>
        </div>
        <div className='col-12 col-md-6 col-xl-3'> 
        <h2 className=' mb-xl-5 text-md montserrat-medium secondary-text text-uppercase secondary-text text-uppercase footer-link'>Quick Links</h2>
        <ul className='list-unstyled secondary-text montserrat-regular'>
            <li className='mb-2 text-sm'><a href='#'>Political Law</a></li>
            <li className='mb-2 text-sm'><a href='#'>Divorse law</a></li>
            <li className='mb-2 text-sm'><a href='#'>Business Law</a></li>
            <li className='mb-2 text-sm'><a href='#'>Industrial Law</a></li>
            <li className='mb-2 text-sm'><a href='#'>Real Estate Law</a></li>
            <li className='mb-2 text-sm'><a href='#'>Car Law</a></li>

          </ul>
        </div>
        <div className='col-8 col-md-6 col-xl-3'>
        <h2 className=' mb-xl-5 text-md montserrat-medium secondary-text text-uppercase secondary-text text-uppercase footer-link'>Working Hours</h2>
        <div className='d-inline-flex justify-content-center align-items-center p-3 gap-5 working-hours-box'>
          <ul className=' list-unstyled secondary-text montserrat-regular'>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
          <ul className=' list-unstyled secondary-text regular-text sub-paragraph'>
          <li>9AM-9PM</li>
            <li>9AM-7PM</li>
            <li>Closed</li>
            <li>9AM-1PM</li>
            <li>9AM-9PM</li>
            <li>8AM-10PM</li>
            <li>Closed</li>
          </ul>
        </div>
        </div>
      </div>

    <div className='d-inline-flex justify-content-center align-items-center gap-3 mt-3'>
      <div className='footer-icon  d-flex justify-content-center align-items-center'>
      <FaFacebookF className='icon' />
      </div>
      <div className='footer-icon  d-flex justify-content-center align-items-center'> 
      <FaGooglePlusG className='icon' />
      </div>
      <div className='footer-icon  d-flex justify-content-center align-items-center'> 
      <FaGooglePlusG className='icon'/>
      </div>
    </div>
      <div className='divider'></div>

      <div className='d-flex flex-column flex-xl-row justify-content-between align-items-center secondary-text sub-paragraph light-text'>
       <div>
       <div className='d-inline-flex  justify-content-between align-items-center gap-4 '>
          <span>
            <a className='text-decoration-none text-sm secondary-text montserrat-regular'>Privacy Policy</a> 
          </span>
    <div className='text-decoration-none text-sm secondary-text montserrat-regular'></div>
          <span>
            <a className='text-decoration-none text-sm secondary-text montserrat-regular'>Cookies acceptance/policy </a>
          </span>
          <div className='text-decoration-none text-sm secondary-text montserrat-regular'></div>
          <span>
            <a className='text-decoration-none text-sm secondary-text montserrat-regular'>Spam Policy</a>
          </span>
        </div>
       </div>
        <div>
          <span className='text-decoration-none text-sm secondary-text montserrat-regular'>© 2024, All Rights Reserved</span>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
