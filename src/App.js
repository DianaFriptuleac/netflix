import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import MovieSection from './components/MovieSection';
import MainMovieSection from './components/MainMovieSection';
import SettingsPage from './components/SettingsPage'; //SettingsPage component (statico!!)
import ProfilePage from './components/ProfilePage';  //Prodile component
//!!!!!!!!!!!per vedere sia SettingsPage che ProfilePage commentare sia MovieSection (galleria) che MainMovieSection (la parte sopra la galleria dei film)



function App() {
  return (
    <>
      <header>
      <CustomNavbar />
      </header>
     <main>
  
      {/* <ProfilePage/>*/}
  {/*<SettingsPage/>*/}
       <MainMovieSection/>
   
     <MovieSection saga="Harry Potter" />
      <MovieSection saga="Lord of the Rings" />
      <MovieSection saga="Star Wars" />
      <MovieSection saga="Fast" />
      <MovieSection saga="Disney" /> 
   
   </main>
      <footer>
        <MyFooter/>
      </footer>
    </>
  );
}

export default App;
