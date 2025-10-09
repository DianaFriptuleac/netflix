import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import SettingsPage from "./components/SettingsPage";
import ProfilePage from "./components/ProfilePage"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
