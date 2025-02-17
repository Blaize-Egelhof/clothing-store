import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavBar() {
  const [userName,setUsername] = useState();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left Section - Navigation Links */}
        <Nav className="me-auto">
          <NavDropdown title="Navs" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
          </NavDropdown>

          
            <Nav.Link href={userName ? "#profile" : "#signin"}>
              {userName ? `Welcome, ${userName}` : "Sign In"}
            </Nav.Link>
        </Nav>

        {/* Center Section - Brand Name */}
        <Navbar.Brand href="#" className="mx-auto fs-4 fw-bold">House Of Ghouls</Navbar.Brand>

        {/* Right Section - Search Bar */}
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
