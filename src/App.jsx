import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  MyNavbar from './components/MyNavbar' 
import  Footer from './components/Footer'
import Formulario from './components/form/Formulario'
import Login from './components/form/Login'
import Home from './components/Home'
import Cart from './components/Cart'

function App() { 
    return (
        <>

            <MyNavbar/>
            
            <Cart/>

            {/* <Home/> */}

            {/* <Formulario/> */}

            {/* <Login/> */}


          <Footer/>
           
        </>
    );
}

export default App;


