import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Footer from './components/Footer'
import Formulario from './pages/Formulario'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Notfound from './pages/Notfound';
import Profile from './pages/Profile';
import { Route, Routes } from "react-router-dom";
import { NavItem } from 'react-bootstrap';
import Navegacion from './components/Navegacion';


function App() { 
    return (
        <>
  
       <Navegacion/>
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="*" element={<Notfound />} />
              
            </Routes>
            <Footer/>
        
        

         
           
        </>
    );
}

export default App;


