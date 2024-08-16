import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ApplicationForm } from './pages/SubmitApplication/ApplicationForm';
import { Home } from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import PetDetails from './pages/PetDetails/PetDetails';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  const location = useLocation(); // Get the current path
  
  // Define paths where Navbar and Footer should be hidden
  const hideNavbarFooterPaths = ['/','/registration'];

  return (
    <>
      <div className='app'>
        {!hideNavbarFooterPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path='/registration' element={<RegistrationPage/>} />
          <Route path="/applicationform" element={<ApplicationForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/petdetails/:petId' element={<PetDetails/>} />
          <Route path='/contactus' element={<ContactUs/>} />
        </Routes>
      </div>
      {!hideNavbarFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

