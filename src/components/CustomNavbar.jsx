import { Navbar, Container, Nav } from 'react-bootstrap'

const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <a className="navbar-brand" href="#">
            <img src="/assets/logo.png" style={{ width: '100px', height: '55px' }} alt="Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='active'>Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recentlyaddes">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="#serch" className='active'><i className="bi bi-search"></i></Nav.Link>
          <Nav.Link href="#kids" className='active'>KIDS</Nav.Link>
          <Nav.Link href="#bill" className='active'><i className="bi bi-bell-fill"></i></Nav.Link>
          <Nav.Link href="#account" className='active'><i className="bi bi-person-circle icons"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
