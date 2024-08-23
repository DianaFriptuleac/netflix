import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import { Container } from 'react-bootstrap';
import MovieSection from './components/MovieSection';


function App() {
  return (
    <>
      <header>
      <CustomNavbar />
      </header>
      <main className='bg-dark'>
      <Container fluid>
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
