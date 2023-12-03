
//import '../styles/App.css';
import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from './Header.js'
import Footer from './Footer.js'
import DisplayHomes from '../pages/DisplayHomes.jsx';

function App() {
  return (
    <div>
      <Header/>
    <DisplayHomes/>
      <Footer/>
    </div>
  );
}

export default App;
