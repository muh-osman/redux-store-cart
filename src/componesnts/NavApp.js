import {Nav, Navbar, Container} from 'react-bootstrap';

import { GrAmazon } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';

import { NavLink } from 'react-router-dom'

import { useSelector } from "react-redux";


const NavApp = () => {

  const cart = useSelector((state)=> state.cart)




  return (
    <Navbar bg="light" expand="lg" sticky="top" className="mb-5">
      <Container>
        
            <Navbar.Brand as={NavLink} to='/'> <GrAmazon /> </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
                <Nav.Link as={NavLink} to='/'> <HiHome /> Home  </Nav.Link>
              
              
                <Nav.Link as={NavLink} to='cart'> <FaShoppingCart /> Cart - <span className="cart-num"> {cart.length} </span> </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavApp;
