import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

          </Nav>
          <Badge badgeContent={1} color="primary" style={{ top: "5px" }} id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} >
            <i class="fa-solid fa-cart-shopping" style={{ color: 'white', margin: '10px', cursor: 'pointer', fontSize: '25px' }}></i>
          </Badge>

        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div className="card_details d-flex justify-content-center align-items-center" style={{width:'380px',padding:'10px',position:'relative'}}>
              <i className="fas fa-close smallclose" style={{position:'absolute', top:2,right:50,fontSize:23,cursor:'pointer'}} onClick={handleClose}></i>
              <p style={{fontSize:'22'}}>Your Cart is Empty</p>
              <img src='./cart.gif' className="emptycart_img" style={{width:'80px', padding:'10px'}}></img>
            </div>
        </Menu>

      </Navbar>
    </div>
  )
}
export default Header
