import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-bootstrap";
class NavBar extends Component{

  
  render(){

        return(
          <div>
            <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">Homination</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                
              >
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown" href='/categories'>
                  <NavDropdown.Item href="/categories/painting">Painting</NavDropdown.Item>
                  <NavDropdown.Item href="/categories/foundation">Foundation</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
              <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
          </div>
        )
    }
}

export default NavBar