import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavBar() {

return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
                />{' '}
            GIT VIZ
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
       </Navbar>
    </>
  )
}