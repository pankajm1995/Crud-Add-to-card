import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";

import { useSelector } from "react-redux";


const Header = () => {


  const getdata = useSelector((state)=>state.cartreducer.carts);
  console.log(getdata)


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3 ">
            AddToCart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >

          {
            getdata.length ? 
            <div className="card_details" style={{width:'900px', padding:'10px'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          getdata.map((e)=>{
                            return(

                                <>
                                  <tr>
                                    <td>
                                      <NavLink to={`/cart/${e.id}`}> <img src={e.imgdata} style={{width:'80px',height:'80px'}} alt="not available"></img></NavLink> 
                                    </td>
                                    <td>
                                        <p>{e.rname}</p>
                                        <p>Price: ₹ {e.price}</p>
                                    </td>
                                    <td>
                                        <p>{e.rname}</p>
                                        <p>Quantity: ₹ {e.qnty}</p>
                                        <p style={{color:'red',fontSize:'20',cursor:'pointer'}}><i className="fas fa-trash smalltrash"></i></p>
                                    </td>
                                    <td className="mt-5" style={{color:'red',fontSize:'20',cursor:'pointer'}}>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                  </tr>
                                </>


                            )
                          })
                        }
                        <p className='text-center'>Total :₹ 300</p>
                    </tbody>
                </Table>
            </div> :
            <div className="card_details d-flex justify-content-center align-items-center" style={{width:'380px',padding:'10px',position:'relative'}}>
              <i className="fas fa-close smallclose" style={{position:'absolute', top:2,right:50,fontSize:23,cursor:'pointer'}} onClick={handleClose}></i>
              <p style={{fontSize:'22'}}>Your Cart is Empty</p>
              <img src='./cart.gif' className="emptycart_img" style={{width:'80px', padding:'10px'}} alt="Not avial"></img>
            </div>
          }


            
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;