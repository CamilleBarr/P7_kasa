import headerLogo from '../assets/headerLogo.svg';
import { Link } from 'react-router-dom'
import '../styles/Header.css';

function Banner() {
  
  const navTitleHome = "Accueil"
  const navTitleAbout = 'A propos'
  
  return (<div className="header">
    
    <img src={headerLogo} className="header-logo" alt="logo" />
    <nav className="header-nav">
      <a className="header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {navTitleHome}
      </a>
      <a className="header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {navTitleAbout}
      </a>
    </nav>
  </div>)
}

export default Banner
