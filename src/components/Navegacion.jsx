import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

function Navegacion() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./pages/Formulario.jsx">Registro</Nav.Link>
            <Nav.Link href="./pages/Login.jsx">Login</Nav.Link>
            <Nav.Link href="./pages/Cart.jsx">Cart</Nav.Link>
            <Nav.Link href="./pages/Profile.jsx">Profile</Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;