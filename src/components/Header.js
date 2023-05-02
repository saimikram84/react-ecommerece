import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
    <>
      <Navbar expand="lg" className='section-header' fixed="top">
        <Container >
          <Link to="/" className='navbar-brand me-5'>Ecom</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 section-header-search-input"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Nav>
            <Nav>
              <Link to="/about" className='nav-link'>
                <FaCartArrowDown />
              </Link>
              <Link to="/about" className='nav-link'>Sign In</Link>
              <NavDropdown id="navbarScrollingDropdown" align="end">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className='section-header-second'>
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
              <Link to="/products" className='nav-link'>Products</Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown" align="end">
                <NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/about" className='nav-link'>Get App</Link>
              <Link to="/about" className='nav-link'>English</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;