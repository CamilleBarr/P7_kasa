
//import '../styles/App.css';
import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from './Header.js'
import Error from './Error.js'
import DisplayHomes from '../pages/DisplayHomes.js'
import Footer from './Footer.js'

function App() {
  return (
    <div>
    <Header/>
    <main>
				<Routes>
					<Route path="/" element={<DisplayHomes />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
      <Footer/>
      </div>
  );
}

export default App;
