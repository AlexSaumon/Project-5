import '../Styles/Footer.scss'
import kasaLogoBw from '../assets/LOGOB&W.svg'

function Footer() {
    return (
      <footer >
        <img src={kasaLogoBw} className="LOGO" alt="Kasa logo" />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </footer>
    );
  }
  
  export default Footer;