import './App.scss';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';


function App() {
  return (  
  <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="aboutme" element={<About/>}/>
      <Route path='contactme' element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
