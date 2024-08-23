import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
//import MovieSection from './components/MovieSection';
//import MainMovieSection from './components/MainMovieSection';
import AccountPage from './components/AccountPage';



function App() {
  return (
    <>
      <header>
      <CustomNavbar />
      </header>
     <main>
      {/*<MainMovieSection/>*/}
     <AccountPage/>
    
      
     {/*} *<MovieSection saga="Harry Potter" />
      <MovieSection saga="Lord of the Rings" />
      <MovieSection saga="Star Wars" />
      <MovieSection saga="Fast" />
      <MovieSection saga="Marvel" />*/}
   </main>
      <footer>
        <MyFooter/>
      </footer>
    </>
  );
}

export default App;
