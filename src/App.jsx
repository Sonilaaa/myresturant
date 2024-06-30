import React from 'react'
import {  Route,  Router,  Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import Reviews from './Pages/Reviews';
import Contacts from './Pages/Contacts';





function App() {
  



  return (
    <>


  
    <Navbar/> 
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/events' element={<Events/>}/>
<Route path='/Menu' element={<Menu/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/reviews' element={<Reviews/>}/> 
<Route path='/contact' element={<Contacts/>}/>

</Routes>




  
    </>
    
  );
    
  
}

export default App
