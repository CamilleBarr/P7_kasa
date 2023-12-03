import footerLogo from '../assets/footerLogo.svg';
import '../styles/Footer.css';
import '../styles/App.css';

function Footer() {
  
    const credentials = '© 2020 Kasa. All rights reserved'
    
    return (<div className="footer">
    <img src={footerLogo} alt="logo" />
      <p>
        {credentials}
      </p>
    </div>)
  }
  
  export default Footer
  