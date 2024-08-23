import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import { Container,Row,Col, Dropdown } from 'react-bootstrap';
import MovieSection from './components/MovieSection';


function App() {
  return (
    <>
      <header>
      <CustomNavbar />
      </header>
      <main className='bg-dark'>
      <Container fluid>
      <Row className="mb-3 align-items-center mx-2">
     
            <Col xs='auto'>
              <h2 className='text-light'>TV Shows</h2>
            </Col>
            <Col xs='auto'>
              <Dropdown className='dropdown-outline'>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/comedy">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/drama">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/thriller">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
         
          <Col className='text-end'>
          <i className="bi bi-grid icons text-light me-3"></i>
          <i className="bi bi-grid-3x3 icons text-light"></i>
          </Col>
        </Row>
      <MovieSection saga="Harry Potter" />
      <MovieSection saga="Lord of the Rings" />
      <MovieSection saga="Star Wars" />
    </Container>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </>
  );
}

export default App;
