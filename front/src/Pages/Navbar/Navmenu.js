import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Container,Navbar, Nav} from 'react-bootstrap'
import { Avatar, Grid } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.css'
function Navmenu() {
  const user= false;
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Property Management</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/features">Features</Nav.Link>
     <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/admin">About Us</Nav.Link>
      

    </Nav>
   
    <Nav>
      {
       user ?( <Nav.Link href="/Profile"><Avatar 
        rounded
        size="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /></Nav.Link>
       ):(
       <>
      <Nav.Link href="/Login">Login</Nav.Link>
     
      </>
       )
}  
<Nav.Link href="/Logout">{user && "Logout"}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Navmenu