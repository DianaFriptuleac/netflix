import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.png"
            style={{ width: "100px", height: "55px" }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end className="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tvshows">TV Shows</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/recently">Recently Added</Nav.Link>
            <Nav.Link as={NavLink} to="/mylist">My List</Nav.Link>
            </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/search" className="active">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/kids" className="active">
              KIDS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bill" className="active">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
              <Nav.Link as={NavLink} to="/settings" className="active">
              <i className="bi bi-gear"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className="active">
              <i className="bi bi-person-circle icons"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
