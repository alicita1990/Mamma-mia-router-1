import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartContext } from './context/Cartcontext';
import React, { useContext } from 'react'; 
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from "react-icons/fa"; 



  function MyNavbar() {
    const { getTotal } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        {/* Usar `Link` de react-router-dom directamente */}
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Usar `Link` de react-router-dom directamente */}
            <Nav.Link as={Link} to="/Formulario">Formulario</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/*">Notfound</Nav.Link>
            {/* Este enlace tiene un href en lugar de `to` ya que es un enlace estándar */}
            <Nav.Link href="#link">total</Nav.Link>
            <NavDropdown title="como pedir" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Armala</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Te Sugerimos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">De la casa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="dark">
            Total: ${getTotal()} <FaCartPlus style={{ marginLeft: '5px' }} /> 
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
