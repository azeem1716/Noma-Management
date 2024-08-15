import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBars, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import GreenBtn from './common/GreenBtn';
import { FaFacebookF } from 'react-icons/fa6';
const Header = () => {

    const [expanded, setExpanded] = useState(false);

  return (
  
    // <Navbar
    //   expanded={expanded}
    //   expand="lg"
    //   variant="light"
    //   className={`transparent-navbar ${expanded ? 'navbar-expanded' : ''} position-absolute` }
    // >
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={require('../assests/images/Noma-Logo.png')} 
    //         height="30"
    //         className="d-inline-block align-top"
    //         alt="Logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle
    //       aria-controls="basic-navbar-nav"
    //       onClick={() => setExpanded(expanded ? false : 'expanded')}
    //     >
    //       <FaBars />
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto light-text">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#about">About Us</Nav.Link>
    //         <Nav.Link href="#services">Services</Nav.Link>
    //         <Nav.Link href="#team">Our Team</Nav.Link>
    //         <Nav.Link href="#contact">Contact Us</Nav.Link>
    //       </Nav>
    //       <GreenBtn text={"Get a qoute"}/>
    //       <GreenBtn text={"Login Now"}/>

    //       <Button variant="outline-primary" className="ml-2">Get A Quote</Button>
    //       <Button variant="primary" className="ml-2">Sign Up</Button>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


<div>
<div className="top-header">
  <div className="max-width-container">
    <div className="contact-info">
      <div className="contact-item">
        <FaEnvelope /> info@bostonea.com
      </div>
      <div className="contact-item">
      <FaPhone /> (+92) 03058587336
      </div>
    </div>
    <div className="social-info">
      <span>Follow us:</span>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
    </div>
  </div>
</div>


<Navbar expanded={expanded} expand="lg" className="custom-navbar">
  <Container className="max-width">
    <Navbar.Brand href="#home">
      <img
        src={require('../assests/images/Noma-Logo.png')}
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls="basic-navbar-nav"
      onClick={() => setExpanded(expanded ? false : "expanded")}
    >
      <FaBars />
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto nav-links">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#team">Our Team</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
      <div className="btn-group">
        <GreenBtn text={"Get a Quote"} />
        <GreenBtn text={"Contact Us"} />
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>



  )
}

export default Header

// <div className='position-absolute'>
 
// <div className='container d-flex justify-content-between align-items-center gap-5'>
// <div>
//   <img src={require('../assests/images/Noma-Logo.png')}/>
//  </div>

//  <header>
//   <ul className='d-flex list-unstyled gap-2 secondary-text light-text'>
//     <li>
//       Home
//     </li>
//     <li>
//       About us
//     </li>
//     <li>
//       Services
//     </li>
//     <li>
//       Our Team
//     </li>
//     <li>
//       Contact Us
//     </li>
//   </ul>
//  </header>
// </div>
// </div>