import React from 'react'

const Header = () => {
  return (
    <div className='position-absolute'>
     
    <div className='container d-flex justify-content-between align-items-center gap-5'>
    <div>
      <img src={require('../assests/images/Noma-Logo.png')}/>
     </div>

     <header>
      <ul className='d-flex list-unstyled gap-2 secondary-text light-text'>
        <li>
          Home
        </li>
        <li>
          About us
        </li>
        <li>
          Services
        </li>
        <li>
          Our Team
        </li>
        <li>
          Contact Us
        </li>
      </ul>
     </header>
    </div>
    </div>
  )
}

export default Header
