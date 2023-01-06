import {Nav, Navbar, Container} from 'react-bootstrap';

import { GrAmazon } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';

import { NavLink } from 'react-router-dom'





const NavApp = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        
            <Navbar.Brand as={NavLink} to='/'> Amazon <GrAmazon /> </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
                <Nav.Link as={NavLink} to='/'>Home <HiHome /> </Nav.Link>
              
              
                <Nav.Link as={NavLink} to='cart'> Cart <FaShoppingCart /> 3 </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavApp;
