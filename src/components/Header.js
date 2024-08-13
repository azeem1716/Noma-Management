import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'
import GreenBtn from './common/GreenBtn';
const Header = () => {

    const [expanded, setExpanded] = useState(false);

  return (
    <>
    </>
    // <Navbar
    //   expanded={expanded}
    //   expand="lg"
    //   variant="light"
    //   className={`transparent-navbar ${expanded ? 'navbar-expanded' : ''} position-absolute` }
    // >
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={require('../assests/images/Noma-Logo.png')} // Replace with your logo path
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

    //       {/* <Button variant="outline-primary" className="ml-2">Get A Quote</Button>
    //       <Button variant="primary" className="ml-2">Sign Up</Button> */}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    // <Navbar expanded={expanded} expand="lg"  className="transparent-navbar position-absolute">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={require('../assests/images/Noma-Logo.png')} // Replace with your logo path
    //         height="30"
    //         className="d-inline-block align-top"
    //         alt="Logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle 
    //       aria-controls="basic-navbar-nav"
    //       onClick={() => setExpanded(expanded ? false : "expanded")}
    //     >
    //       <FaBars />
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="light-text small-paragraph">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#about">About Us</Nav.Link>
    //         <Nav.Link href="#services">Services</Nav.Link>
    //         <Nav.Link href="#team">Our Team</Nav.Link>
    //         <Nav.Link href="#contact">Contact Us</Nav.Link>
    //       </Nav>
    //       {/* <Button variant="outline-primary" className="ml-2"> */}
    //         <GreenBtn text={"Get a qoute"} />
    //       {/* </Button> */}
    //       <Button variant="primary" className="ml-2">Sign Up</Button>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

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