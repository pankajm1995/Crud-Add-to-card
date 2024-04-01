import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add to cart</Nav.Link>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <i class="fa-solid fa-cart-shopping" style={{color:'green',margin:'10px', cursor:'pointer'}}></i>
</Badge>
          
        </Container>
      </Navbar>
    </div>
  )
}
export default Header
