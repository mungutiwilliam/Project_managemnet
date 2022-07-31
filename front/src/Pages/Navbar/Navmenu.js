import React from 'react'
import {Container,Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
function Navmenu() {
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
      <Nav.Link href="/agent">Login</Nav.Link>
      <Nav.Link href="/owner">Sign-Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Navmenu