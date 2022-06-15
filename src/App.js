import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer'
import './css/Ass.css';

function App() {
  return (
    <div className='fix-size'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
